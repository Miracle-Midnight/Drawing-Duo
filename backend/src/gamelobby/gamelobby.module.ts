import { Module } from '@nestjs/common';
import { GamelobbyController } from './gamelobby.controller';
import { GamelobbyService } from './gamelobby.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Room } from 'src/room/entities/room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Room])],
  controllers: [GamelobbyController],
  providers: [GamelobbyService],
})
export class GamelobbyModule {}
