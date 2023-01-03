import { Image } from '../entities/image.entity';
import { User } from '../../user/entities/user.entity';

export class CreateRoomDto {
  title: string;
  mode: boolean;
  status: boolean;
  users: User[];
  images: Image[];
}
