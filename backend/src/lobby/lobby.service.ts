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

  async getLobby(): Promise<Room[]> {
    return this.roomRepository.find();
  }

  async inRoom(enterRoomDto: EnterRoomDto) {
    const { userid, roomid, password, imageid } = enterRoomDto;

    // 룸에 몇명의 user가 있는지 확인하고 4명이 넘으면 에러
    const checkUser = await this.roomRepository.findOne({
      where: { id: roomid },
      relations: ['users'],
    });
    if (checkUser.users.length >= 4) {
      throw new ForbiddenException('방이 꽉 찼습니다.');
    }

    const targetRoom = await this.roomRepository.findOne({
      where: { id: roomid },
      relations: ['images', 'users'],
    });
    if (!targetRoom) throw new NotFoundException('방이 존재하지 않습니다.');

    // 비밀번호 체크
    // if (password) {
    //   if (targetRoom.password !== password) {
    //     throw new ForbiddenException('비밀번호가 틀렸습니다.');
    //   }
    // }

    if (imageid) {
      const image = await this.imageRepository.findOneBy({ id: imageid });
      if (!image) throw new NotFoundException('이미지가 존재하지 않습니다.');
      // 이미지 중복 - 2개 이상 안들어감 (해결 필요)
      targetRoom.images = [...targetRoom.images, image];
      console.log(targetRoom.images);
      await this.roomRepository.save(targetRoom);
    }

    const userinfo = await this.userRepository.findOne({
      where: { id: userid },
      relations: ['room', 'profile'],
    });
    if (!userinfo) throw new NotFoundException('유저가 존재하지 않습니다.');

    userinfo.room = targetRoom;
    await this.userRepository.save(userinfo);

    return { userNickName: userinfo.profile.nickname };
  }

  async outRoom(enterRoomDto: EnterRoomDto) {
    const { userid, roomid, imageid } = enterRoomDto;
    const userinfo = await this.userRepository.findOne({
      where: { id: userid },
      relations: ['room', 'profile'],
    });
    if (!userinfo.room) {
      throw new ForbiddenException('방에 입장하지 않았습니다.');
    }

    userinfo.room = null;
    userinfo.ready = false;
    await this.userRepository.save(userinfo);

    const targetRoom = await this.roomRepository.findOne({
      where: { id: roomid },
      relations: ['images', 'users'],
    });

    if (imageid) {
      const image = await this.imageRepository.findOneBy({ id: imageid });
      targetRoom.images = targetRoom.images.filter(
        (img) => img.id !== image.id,
      );
      await this.roomRepository.save(targetRoom);
    }
    console.log(targetRoom);

    return { userNickName: userinfo.profile.nickname };
  }
}
