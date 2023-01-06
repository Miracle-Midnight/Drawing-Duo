import { Image } from 'src/room/entities/image.entity';
import { Room } from 'src/room/entities/room.entity';
import { Profile } from '../entities/profile.entity';

export class UserDto {
  userid: string;
  password: string;
  nickname: string;
  type: boolean;
  ready: boolean;
  profile: Profile;
}
