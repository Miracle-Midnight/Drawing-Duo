import {
  ForbiddenException,
  NotFoundException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from 'src/room/entities/room.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { EnterRoomDto } from './dto/enter-room.dto';
import { Image } from 'src/room/entities/image.entity';

@Injectable()
export class LobbyService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
  ) {}

  async myroom(userid) {
    const user = await this.userRepository.findOne({
      where: { id: userid },
      relations: ['room', 'room.image', 'room.user'],
    });
    if (!user) throw new NotFoundException('유저가 존재하지 않습니다.');
    if (user.room.length == 0)
      throw new ForbiddenException('방이 존재하지 않습니다.');
    console.log(user.room);
    const result = [];
    user.room.map((room) => {
      result.push({
        roomid: room.id,
        title: room.title,
        image: room.image,
        user: room.user.map(this.userFilter),
      });
    });
    return result;
  }

  readonly userFilter = (user: User) => ({
    id: user.id,
    userid: user.userid,
  });

  async inRoom(enterRoomDto: EnterRoomDto) {
    const { userid, title } = enterRoomDto;

    const targetRoom = await this.roomRepository.findOne({
      where: { title },
      relations: ['user'],
    });
    if (!targetRoom) throw new NotFoundException('방이 존재하지 않습니다.');

    if (targetRoom.user.length >= 2) {
      throw new ForbiddenException('방이 꽉 찼습니다.');
    }

    const userinfo = await this.userRepository.findOne({
      where: { id: userid },
      relations: ['room', 'profile'],
    });
    if (!userinfo) throw new NotFoundException('유저가 존재하지 않습니다.');

    userinfo.room = [...userinfo.room, targetRoom];
    await this.userRepository.save(userinfo);

    return { userNickName: userinfo.profile.nickname };
  }

  async outRoom(enterRoomDto: EnterRoomDto) {
    const { userid, title } = enterRoomDto;
    const userinfo = await this.userRepository.findOne({
      where: { id: userid },
      relations: ['room', 'profile'],
    });
    if (!userinfo.room.length) {
      throw new ForbiddenException('입장한 방이 없습니다.');
    }

    for (let i = 0; i < userinfo.room.length; i++) {
      if (userinfo.room[i].title == title) {
        userinfo.room.splice(i, 1);
        break;
      }
    }
    await this.userRepository.save(userinfo);

    return { userNickName: userinfo.profile.nickname };
  }
}
