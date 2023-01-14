import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from './entities/room.entity';
import { User } from 'src/user/entities/user.entity';
import { Image } from './entities/image.entity';
import { NotFoundException } from '@nestjs/common/exceptions';
import { SelectImageDto } from './dto/select-image.dto';

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
    return await this.imageRepository.find({ where: { type: true } });
  }

  async selectImage(selectImageDto: SelectImageDto) {
    const { roomid, imageid } = selectImageDto;

    const room = await this.roomRepository.findOne({
      where: { id: roomid },
      relations: ['image'],
    });
    if (!room) {
      throw new NotFoundException('방이 존재하지 않습니다.');
    }

    const image = await this.imageRepository.findOneBy({ id: imageid });
    if (!image) {
      throw new NotFoundException('이미지가 존재하지 않습니다.');
    }

    room.image = image;
    return this.roomRepository.save(room);
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

    newRoom.user = [user];
    await this.roomRepository.save(newRoom);

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
