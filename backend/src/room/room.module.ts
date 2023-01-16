import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Image } from './entities/image.entity';
import { User } from 'src/user/entities/user.entity';
import { MulterModule } from '@nestjs/platform-express';
import * as multer from 'multer';

@Module({
  imports: [
    TypeOrmModule.forFeature([Room, Image, User]),
    MulterModule.register({
      dest: './uploads',
      storage: multer.memoryStorage(),
    }),
  ],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule {}
