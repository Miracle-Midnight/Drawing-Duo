import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from 'src/room/entities/room.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOne(id: number) {
    const oldgame = await this.gameRepository.findOne({
      where: { id: id },
      relations: ['room'],
    });
    return oldgame;
  }

  async findUser(id: number, userId: string) {
    const oldgame = await this.gameRepository.findOne({
      where: { id: id },
      relations: ['room'],
    });
    console.log('DEBUGG');
    console.log(oldgame.room.id);

    const olduser = await this.roomRepository.findOne({
      where: { id: oldgame.room.id },
      relations: ['users'],
    });

    console.log(olduser);
    return oldgame;
  }
}
