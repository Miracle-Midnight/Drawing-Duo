import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from 'src/room/entities/room.entity';
import { User } from 'src/user/entities/user.entity';
import { FriendController } from './friend.controller';
import { FriendService } from './friend.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Room])],
  controllers: [FriendController],
  providers: [FriendService],
})
export class FriendModule {}
