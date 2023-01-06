import { Module } from '@nestjs/common';
import { LobbyController } from './lobby.controller';
import { LobbyService } from './lobby.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from '../room/entities/room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  controllers: [LobbyController],
  providers: [LobbyService],
})
export class LobbyModule {}
