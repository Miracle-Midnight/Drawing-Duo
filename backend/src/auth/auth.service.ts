import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginREquestDto } from './dto/login.request.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private JwtService: JwtService,
  ) {}

  async jwtLogIn(data: LoginREquestDto) {
    const { userid, password } = data;
    console.log(userid, password);

    //* 해당하는 email이 있는지
    const isUserExist = await this.userRepository.findOne({
      where: { userid: userid },
      relations: ['profile', 'profile.image'],
    });
    console.log(isUserExist);
    if (!isUserExist) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    //* password가 일치하는지
    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      isUserExist.password,
    );

    if (!isPasswordValidated) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    const payload = { userid: isUserExist.userid, sub: isUserExist.id };
    console.log(isUserExist.id);
    return {
      token: this.JwtService.sign(payload),
      userid: isUserExist.id,
      username: isUserExist.userid,
      nickname: isUserExist.profile.nickname,
      level: isUserExist.profile.level,
      rank: isUserExist.profile.rank,
      introduction: isUserExist.profile.introduction,
      image: isUserExist.profile.image.image,
    };
  }
}
