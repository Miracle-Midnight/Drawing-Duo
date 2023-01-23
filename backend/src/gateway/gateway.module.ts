import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from 'src/room/entities/room.entity';
import { User } from 'src/user/entities/user.entity';
import { RoomGateway } from './room.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([User, Room])],
  providers: [RoomGateway],
})
export class RoomGatewayModule {}
