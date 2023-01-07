import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from 'src/room/entities/room.entity';
import { User } from 'src/user/entities/user.entity';
import { LobbyController } from './lobby.controller';
import { LobbyService } from './lobby.service';
import { Image } from 'src/room/entities/image.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User, Room, Image])],
  controllers: [LobbyController],
  providers: [LobbyService],
})
export class LobbyModule {}
