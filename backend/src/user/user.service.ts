import { Body, Injectable, Res, UnauthorizedException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { Response } from 'express';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';

import { Profile } from './entities/profile.entity';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async GetUserId(@Body() userDto: UserDto, @Res() res: Response) {
    console.log(userDto.userid, userDto.password);

    res.redirect('/lobby');
  }


  async signUp(@Body() userDto: UserDto) {
    console.log(userDto);
    const { userid, password } = userDto;
    const isUserExist = await this.userRepository.findOne({
      where: { userid: userDto.userid },
    });
    console.log(isUserExist);
    if (isUserExist !== undefined) {
      const newuser = await this.userRepository.create();
      const hashedPassword = await bcrypt.hash(password, 10);
      newuser.userid = userid;
      newuser.password = hashedPassword;
      const user = await this.userRepository.save(newuser);
      console.log(user);
      return user;
    }
    throw new UnauthorizedException('이미 존재하는 아이디입니다.');

  // Make a new user(테스트용)
  async createUser(body) {
    console.log(body);

    const newuser = await this.userRepository.create();
    newuser.userid = body.userid;
    newuser.password = body.password;
    await this.userRepository.save(newuser);
    console.log(newuser);

    const newprofile = await this.profileRepository.create();
    newprofile.nickname = body.nickname;
    await this.profileRepository.save(newprofile);

    console.log(newprofile);
    newuser.profile = newprofile;
    await this.userRepository.save(newuser);
    return { newuser, newprofile };
  }

  // Make a new user(테스트용)
  async getProfile(id: number) {
    console.log(id);
    const profile = await this.userRepository.findOne({
      where: { id: id },
      relations: ['profile'],
    });
    console.log(profile);
    return profile;

  }
}
