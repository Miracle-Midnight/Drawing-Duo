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

  async userReady(id: number, userId: string) {
    const oldgame = await this.gameRepository.findOne({
      where: { id: id },
      relations: ['room'],
    });

    const oldroom = await this.roomRepository.findOne({
      where: { id: oldgame.room.id },
      relations: ['users'],
    });
    console.log(oldroom);
    for (let i = 0; i < oldroom.users.length; i++) {
      if (oldroom.users[i].userid === userId) {
        if (oldroom.users[i].ready === true) {
          oldroom.users[i].ready = false;
          await this.userRepository.save(oldroom.users[i]);
          return oldroom;
        }
        oldroom.users[i].ready = true;
        await this.userRepository.save(oldroom.users[i]);
      }
    }
    return oldroom;
  }

  // 게임 생성과 동시에 room과 game이 연결됨
  async createGame(id: number) {
    const oldgame = await this.gameRepository.create();
    const oldroom = await this.roomRepository.findOne({ where: { id: id } });
    oldgame.room = oldroom;
    await this.gameRepository.save(oldgame);
    return oldgame;
  }
}
