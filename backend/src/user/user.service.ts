import { Body, Injectable, Res, UnauthorizedException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { Response } from 'express';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';
import { Image } from 'src/room/entities/image.entity';

import { Profile } from './entities/profile.entity';
import * as childProcess from 'child_process';

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
    const path1 = `http://localhost:3000/media/profile/${files[0].filename}`;
    const path2 = `http://localhost:3000/media/profile/${files[1].filename}`;
    console.log(path1);

    return new Promise((resolve, reject) => {
      // 2. spawn을 통해 "python 파이썬파일.py" 명령어 실행
      const pythonProcess = childProcess.spawn('python', [
        'src/user/similarity.py',
        path1,
        path2,
      ]);

      let output = '';

      // 3. stdout의 'data'이벤트리스너로 실행결과를 받는다.
      pythonProcess.stdout.on('data', (data) => {
        output += data.toString();
        console.log(output);
      });

      // 4. 에러 발생 시, stderr의 'data'이벤트리스너로 실행결과를 받는다.
      pythonProcess.stderr.on('data', (data) => {
        console.log(data.toString());
      });

      pythonProcess.on('close', (code) => {
        if (code === 0) {
          resolve(output);
        } else {
          reject(new Error(`Python script exited with code ${code}`));
        }
      });
    });
  }
}
