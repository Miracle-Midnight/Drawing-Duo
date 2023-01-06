import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from './entities/room.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createRoom(id: number, createRoomDto: CreateRoomDto): Promise<Room> {
    const newRoom = this.roomRepository.create(createRoomDto);
    // image 추가 - image path 저장
    // room에 방장 추가 - client side에서 user를 받아서 room에 추가
    const user = await this.userRepository.findOneBy({ id });
    newRoom.users = [user];
    await this.roomRepository.save(newRoom);

    return await this.roomRepository.findOne({
      where: { id: newRoom.id },
      relations: ['users'],
    });
  }

  async deleteRoom(id: number) {
    const room = await this.roomRepository.findOneBy({ id });
    return this.roomRepository.remove(room);
  }
}
