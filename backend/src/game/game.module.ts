import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';
import { Room } from 'src/room/entities/room.entity';
import { User } from 'src/user/entities/user.entity';
import { Image } from 'src/room/entities/image.entity';
import { MulterModule } from '@nestjs/platform-express';
import * as multer from 'multer';

@Module({
  imports: [
    TypeOrmModule.forFeature([Game, Room, User, Image]),
    MulterModule.register({
      dest: './uploads',
      storage: multer.memoryStorage(),
    }),
  ],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
