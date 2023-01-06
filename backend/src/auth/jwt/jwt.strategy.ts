import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Payload } from './jwt.payload';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret',
    });
  }

  // async validate(payload: Payload) {
  //   const cat = await this.userRepository.findCatByIdWithoutPassword(
  //     payload.sub,
  //   );

  //   if (cat) {
  //     return cat; // request.user
  //   } else {
  //     throw new UnauthorizedException('접근 오류');
  //   }
  // }
}
