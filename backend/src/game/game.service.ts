import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from 'src/room/entities/room.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Game } from './entities/game.entity';
import { GameUserReadyDto } from './dto/game-user-ready.dto';
import { EnterGameDto } from './dto/enter-game.dto';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import * as path from 'path';
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { Image } from 'src/room/entities/image.entity';

@Injectable()
export class GameService {
  private readonly awsS3: AWS.S3;
  public readonly S3_BUCKET_NAME: string;

  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
    private readonly configService: ConfigService,
  ) {
    this.awsS3 = new AWS.S3({
      accessKeyId: this.configService.get('AWS_S3_ACCESS_KEY'), // process.env.AWS_S3_ACCESS_KEY
      secretAccessKey: this.configService.get('AWS_S3_SECRET_KEY'),
      region: this.configService.get('AWS_S3_REGION'),
    });
    this.S3_BUCKET_NAME = this.configService.get('AWS_S3_BUCKET_NAME'); // nest-s3
  }

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
