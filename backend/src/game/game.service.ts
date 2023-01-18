import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from 'src/room/entities/room.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Game } from './entities/game.entity';
import { GameUserReadyDto } from './dto/game-user-ready.dto';
import { EnterGameDto } from './dto/enter-game.dto';

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

  async userReady(gameUserReadyDto: GameUserReadyDto) {
    const { userid, gameid } = gameUserReadyDto;

    const user = await this.userRepository.findOneBy({ id: userid });
    if (user.ready == true) {
      user.ready = false;
    } else {
      user.ready = true;
    }
    await this.userRepository.save(user);

    const game = await this.gameRepository.findOne({
      where: { id: gameid },
      relations: ['room'],
    });

    const room = await this.roomRepository.findOne({
      where: { id: game.room.id },
      relations: ['users'],
    });
    console.log(room);

    let cnt = 0;
    room.user.forEach((user) => {
      if (user.ready) {
        cnt++;
      }
    });

    return { cnt: cnt };
  }

  async inGame(id: number) {
    const room = await this.roomRepository.findOne({
      where: { id },
      relations: ['user', 'user.profile', 'image'],
    });

    const usersName = room.user.map((user) => ({
      nickname: user.profile.nickname,
    }));

    return {
      usersName: usersName,
      originImage: room.image.image,
      frameImage: room.image.frameImage,
      rgb: room.image.rgb,
    };
  }

  // 게임 생성과 동시에 room과 game이 연결됨
  async createGame(id: number) {
    const oldgame = await this.gameRepository.create();
    const oldroom = await this.roomRepository.findOne({
      where: { id: id },
      relations: ['users'],
    });
    console.log(oldroom);

    oldgame.room = oldroom;
    await this.gameRepository.save(oldgame);
    console.log(oldgame);

    for (let i = 0; i < oldroom.user.length; i++) {
      oldroom.user[i].ready = false;
      await this.userRepository.save(oldroom.user[i]);
    }

    return { gameid: oldgame.id };
  }

  async deleteGame(id: number) {
    const game = await this.gameRepository.findOne({
      where: { id: id },
      relations: ['room'],
    });

    const room = await this.roomRepository.findOne({
      where: { id: game.room.id },
      relations: ['users'],
    });

    for (let i = 0; i < room.user.length; i++) {
      room.user[i].ready = false;
      await this.userRepository.save(room.user[i]);
    }

    return this.gameRepository.remove(game);
  }
}
