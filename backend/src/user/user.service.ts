import {
  Body,
  ConsoleLogger,
  Injectable,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { Response } from 'express';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Image } from 'src/room/entities/image.entity';
import { Profile } from './entities/profile.entity';
import * as childProcess from 'child_process';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import { BadRequestException } from '@nestjs/common';
import * as path from 'path';
import { ForbiddenException } from '@nestjs/common/exceptions';

@Injectable()
export class UserService {
  private readonly awsS3: AWS.S3;
  public readonly S3_BUCKET_NAME: string;

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
    private readonly configService: ConfigService,
  ) {
    this.awsS3 = new AWS.S3({
      accessKeyId: this.configService.get('AWS_S3_ACCESS_KEY'), // process.env.AWS_S3_ACCESS_KEY
      secretAccessKey: this.configService.get('AWS_S3_SECRET_KEY'),
      region: this.configService.get('AWS_S3_REGION'),
    });
    this.S3_BUCKET_NAME = this.configService.get('AWS_S3_BUCKET_NAME'); // nest-s3
  }

  async GetUserId(@Body() userDto: UserDto, @Res() res: Response) {
    // const user = this.userRepository.findOneBy({
    //   userid: userDto.userid,
    //   password: userDto.password,
    // });
    // console.log(user);
    // res.redirect('/lobby');
  }

  async signUp(
    @Body() userDto: UserDto,
    folder: string,
    file: Express.Multer.File,
  ) {
    const { userid, password, nickname } = userDto;
    const isUserExist = await this.userRepository.findOne({
      where: { userid: userDto.userid },
    });

    if (isUserExist) {
      throw new UnauthorizedException('이미 존재하는 아이디입니다.');
    }

    const isNicknameExist = await this.profileRepository.findOne({
      where: { nickname: userDto.nickname },
    });

    if (isNicknameExist) {
      throw new UnauthorizedException('이미 존재하는 닉네임입니다.');
    }

    if (file != null) {
      const key = `${folder}/${Date.now()}_${path.basename(
        file.originalname,
      )}`.replace(/ /g, '');

      try {
        const s3Object = await this.awsS3
          .putObject({
            Bucket: this.S3_BUCKET_NAME,
            Key: key,
            Body: file.buffer,
            ACL: 'public-read',
            ContentType: file.mimetype,
          })
          .promise();

        // 유저 정보 생성 및 저장.
        const newuser = await this.userRepository.create();
        const hashedPassword = await bcrypt.hash(password, 10);
        newuser.userid = userid;
        newuser.password = hashedPassword;
        const user = await this.userRepository.save(newuser);

        // 프로필 정보 생성 및 저장.
        const newProfile = await this.profileRepository.create();
        newProfile.nickname = nickname;
        newProfile.user = user;

        const imagePath = `https://${this.S3_BUCKET_NAME}.s3.amazonaws.com/${key}`;
        const newimage = await this.imageRepository.create();
        newimage.image = imagePath;
        newimage.type = false;
        await this.imageRepository.save(newimage);

        newProfile.image = newimage;
        const profile = await this.profileRepository.save(newProfile);

        return {
          nickname: profile.nickname,
          userid: user.id,
          image: newimage.image,
          level: profile.level,
          rank: profile.rank,
          introduction: profile.introduction,
        };
      } catch (error) {
        throw new BadRequestException(`File upload failed : ${error}`);
      }
    }

    // 유저 정보 생성 및 저장.
    const newuser = await this.userRepository.create();
    const hashedPassword = await bcrypt.hash(password, 10);
    newuser.userid = userid;
    newuser.password = hashedPassword;
    const user = await this.userRepository.save(newuser);

    // 프로필 정보 생성 및 저장.
    const newProfile = await this.profileRepository.create();
    newProfile.nickname = nickname;
    newProfile.user = user;
    const profile = await this.profileRepository.save(newProfile);

    return {
      nickname: profile.nickname,
      userid: user.id,
      level: profile.level,
      rank: profile.rank,
      introduction: profile.introduction,
    };
  }

  // 게임 그림 스토리지와 DB에 저장.
  async uploadImg(folder: string, files: Array<Express.Multer.File>) {
    const key1 = `${folder}/${Date.now()}_${path.basename(
      files[0].originalname,
    )}`.replace(/ /g, '');

    const key2 = `${folder}/${Date.now()}_${path.basename(
      files[1].originalname,
    )}`.replace(/ /g, '');

    const imagePath1 = `/${key1}`;
    const imagePath2 = `/${key2}`;
    try {
      const s3Object = await this.awsS3
        .putObject({
          Bucket: this.S3_BUCKET_NAME,
          Key: key1,
          Body: files[0].buffer,
          ACL: 'public-read',
          ContentType: files[0].mimetype,
        })
        .promise();
    } catch (error) {
      throw new BadRequestException(`File upload failed : ${error}`);
    }

    try {
      const s3Object = await this.awsS3
        .putObject({
          Bucket: this.S3_BUCKET_NAME,
          Key: key2,
          Body: files[1].buffer,
          ACL: 'public-read',
          ContentType: files[1].mimetype,
        })
        .promise();
    } catch (error) {
      throw new BadRequestException(`File upload failed : ${error}`);
    }

    const newimage = await this.imageRepository.create();
    newimage.type = true;
    newimage.modified = false;
    newimage.image = imagePath1;
    newimage.frameImage = imagePath2;
    await this.imageRepository.save(newimage);

    return newimage;
  }

  async saveRGB(id: number, rgbDto) {
    const image = await this.imageRepository.findOne({
      where: { id: id },
    });
    image.rgb = rgbDto;
    await this.imageRepository.save(image);
    return image.rgb;
  }
}