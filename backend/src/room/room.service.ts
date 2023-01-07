import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from './entities/room.entity';
import { User } from 'src/user/entities/user.entity';
import { Image } from './entities/image.entity';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
  ) {}

  async getAllImage() {
    return await this.imageRepository.find();
  }

  async createRoom(id: number, createRoomDto: CreateRoomDto) {
    const newRoom = this.roomRepository.create(createRoomDto);
    // image 추가 - image path 저장
    // room에 방장 추가 - client side에서 user를 받아서 room에 추가
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['profile'],
    });

    newRoom.users = [user];
    await this.roomRepository.save(newRoom);
    console.log(newRoom);
    return {
      roomid: newRoom.id,
      title: newRoom.title,
      mode: newRoom.mode,
      status: newRoom.status,
      userNickName: user.profile.nickname,
    };
  }

  async deleteRoom(id: number) {
    const room = await this.roomRepository.findOneBy({ id });
    return this.roomRepository.remove(room);
  }
}
