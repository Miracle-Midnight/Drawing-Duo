import { Body, Injectable, Res } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { Response } from 'express';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
