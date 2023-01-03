import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
  ) {}

  async findOne(id: number) {
    return { roomNumber: id };
  }

  async createRoom(createRoomDto: CreateRoomDto): Promise<Room> {
    const newRoom = this.roomRepository.create(createRoomDto);
    // room에 방장 추가
    return this.roomRepository.save(newRoom);
  }

  async deleteRoom(id: number) {
    const user = await this.roomRepository.findOneBy({ id });

    return this.roomRepository.remove(user);
  }
}
