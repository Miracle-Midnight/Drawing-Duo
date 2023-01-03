import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginREquestDto } from './dto/login.request.dto';
import { UnauthorizedException } from '@nestjs/common';
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

    //* 해당하는 email이 있는지
    const isUserExist = await this.userRepository.findOne({
      where: { userid: userid },
    });

    if (isUserExist === undefined) {
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

    return {
      userid: isUserExist.id,

      token: this.JwtService.sign(payload),
    };
    //   constructor(private readonly usersService: UsersService) {}

    //   async validateUser(username: string, pass: string): Promise<any> {
    //     const user = await this.usersService.findOne(username);
    //     if (user && user.password === pass) {
    //       const { password, ...result } = user;
    //       return result;
    //     }
    //     return null;
    //   }
  }
}
