import { Injectable } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from 'src/room/entities/room.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LobbyService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
  ) {}

  async inRoom(@Body() uid, roomid: number) {
    const { userid } = uid;

    // 룸에 몇명의 user가 있는지 확인하고 4명이 넘으면 에러
    const checkUser = await this.roomRepository.findOne({
      where: { id: roomid },
      relations: ['users'],
    });
    if (checkUser.users.length >= 4) {
      throw new UnauthorizedException('방이 꽉 찼습니다.');
    }

    // user에 room 추가(user에 roomid 추가하면 자동으로 romm의 users에 user 추가됨)
    const userinfo = await this.userRepository.findOne({
      where: { id: userid },
      relations: ['room'],
    });

    userinfo.room = await this.roomRepository.findOneBy({ id: roomid });
    await this.userRepository.save(userinfo);

    return userinfo.userid;
  }
}
