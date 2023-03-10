import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { RoomGateway } from './room.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [RoomGateway],
})
export class RoomGatewayModule {}
