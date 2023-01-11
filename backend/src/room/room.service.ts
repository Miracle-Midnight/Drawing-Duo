import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from './entities/room.entity';
import { User } from 'src/user/entities/user.entity';
import { Image } from './entities/image.entity';
import { NotFoundException } from '@nestjs/common/exceptions';

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
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['profile'],
    });
    if (!user) {
      throw new NotFoundException('유저가 존재하지 않습니다.');
    }

    newRoom.users = [user];
    await this.roomRepository.save(newRoom);
    console.log(newRoom);

    return {
      roomid: newRoom.id,
      title: newRoom.title,
      userNickName: user.profile.nickname,
    };
  }

  async deleteRoom(id: number) {
    const room = await this.roomRepository.findOneBy({ id });
    if (!room) {
      throw new NotFoundException('방이 존재하지 않습니다.');
    }

    return this.roomRepository.remove(room);
  }
}
