// import { Image } from '../entities/image.entity';
import { PickType } from '@nestjs/swagger';
import { Room } from '../entities/room.entity';
// import { User } from '../../user/entities/user.entity';

export class CreateRoomDto extends PickType(Room, ['title'] as const) {
  // users: User[];
  // images: Image[];
}
