import { Injectable } from '@nestjs/common';
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
    const { userid, roomid, imageid } = enterRoomDto;

    // 룸에 몇명의 user가 있는지 확인하고 4명이 넘으면 에러
    const checkUser = await this.roomRepository.findOne({
      where: { id: roomid },
      relations: ['users'],
    });
    if (checkUser.users.length >= 4) {
      return { success: false, message: '방이 꽉 찼습니다.' };
    }

    // room에 image 추가
    const targetRoom = await this.roomRepository.findOne({
      where: { id: roomid },
      relations: ['images', 'users'],
    });

    const image = await this.imageRepository.findOneBy({ id: imageid });
    // image 중복 체크
    for (let i = 0; i < targetRoom.images.length; i++) {
      if (targetRoom.images[i].id == image.id) {
        return { success: false, message: '이미 선택한 이미지입니다.' };
      }
    }

    targetRoom.images = [...targetRoom.images, image];
    await this.roomRepository.save(targetRoom);

    // user에 room 추가(user에 roomid 추가하면 자동으로 romm의 users에 user 추가됨)
    const userinfo = await this.userRepository.findOne({
      where: { id: userid },
      relations: ['room', 'profile'],
    });
    // targetRoom.users = [...targetRoom.users, userinfo];
    userinfo.room = await this.roomRepository.findOneBy({ id: roomid });
    await this.userRepository.save(userinfo);
    return { userNickName: userinfo.profile.nickname, selectImage: image };
  }

  async outRoom(enterRoomDto: EnterRoomDto) {
    const { userid, roomid, imageid } = enterRoomDto;
    const userinfo = await this.userRepository.findOne({
      where: { id: userid },
      relations: ['room', 'profile'],
    });
    userinfo.ready = false;
    userinfo.room = null;
    await this.userRepository.save(userinfo);

    const targetRoom = await this.roomRepository.findOne({
      where: { id: roomid },
      relations: ['images', 'users'],
    });

    const image = await this.imageRepository.findOneBy({ id: imageid });
    targetRoom.images = targetRoom.images.filter((img) => img.id !== image.id);
    await this.roomRepository.save(targetRoom);
    console.log(targetRoom);
    return { userNickName: userinfo.profile.nickname, selectImage: image };
  }
}
