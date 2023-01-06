import { Body, Injectable, Res, UnauthorizedException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { Response } from 'express';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';
import { Image } from 'src/room/entities/image.entity';

import { Profile } from './entities/profile.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async GetUserId(@Body() userDto: UserDto, @Res() res: Response) {
    // const user = this.userRepository.findOneBy({
    //   userid: userDto.userid,
    //   password: userDto.password,
    // });
    // console.log(user);
    res.redirect('/lobby');
  }

  async signUp(@Body() userDto: UserDto, file: Express.Multer.File) {
    const { userid, password, nickname } = userDto;
    const isUserExist = await this.userRepository.findOne({
      where: { userid: userDto.userid },
    });

    if (isUserExist != undefined) {
      throw new Error('이미 존재하는 아이디입니다.');
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
    const path = `http://localhost:3000/media/profile/${file.filename}`;
    const newimage = await this.imageRepository.create();
    newimage.image = path;
    newimage.type = false;
    await this.imageRepository.save(newimage);

    newProfile.image = newimage;
    const profile = await this.profileRepository.save(newProfile);

    const result = {
      nickname: profile.nickname,
      userid: user.id,
      image: newimage.image,
      level: profile.level,
      rank: profile.rank,
      introduction: profile.introduction,
    };
    return result;
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

  async similarity(files: Array<Express.Multer.File>) {
    const path1 = `http://localhost:3000/media/similarity/${files[0].filename}`;
    const path2 = `http://localhost:3000/media/similarity/${files[1].filename}`;

    const cv = require('opencv.js');

    // Load the images into OpenCV
    const img1 = await cv.imreadAsync(path1);
    const img2 = await cv.imreadAsync(path2);

    // Convert the images to grayscale
    const img1Gray = img1.cvtColor(cv.COLOR_RGBA2GRAY);
    const img2Gray = img2.cvtColor(cv.COLOR_RGBA2GRAY);

    // Use matchTemplate to measure the similarity between the two images
    const result = img1Gray.matchTemplate(img2Gray, cv.TM_CCOEFF_NORMED);

    // Calculate the minimum and maximum values in the result image
    const minMax = result.minMaxLoc();

    // Return the maximum value as the similarity score
    return minMax.maxVal;
  }
}
