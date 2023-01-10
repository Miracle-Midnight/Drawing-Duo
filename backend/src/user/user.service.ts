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
    res.redirect('/lobby');
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

    if (isUserExist != undefined) {
      throw new Error('이미 존재하는 아이디입니다.');
    }

    try {
      const key = `${folder}/${Date.now()}_${path.basename(
        file.originalname,
      )}`.replace(/ /g, '');

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

  async uploadImg(@Body() UserDto, file: Express.Multer.File) {
    const { userid } = UserDto;
    const path = `http://localhost:3000/media/profile/${file.filename}`;
    const newImage = await this.imageRepository.create({
      type: false,
      image: path,
    });
    await this.imageRepository.save(newImage);
    // const user = await this.userRepository.findOne({
    //   where: { id: userid },
    //   relations: ['image'],
    // });
    // user.image.image = path;
    // user.image.type = false;
    // await this.userRepository.save(user);
    return newImage;
  }
}
