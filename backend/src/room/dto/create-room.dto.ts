import { Image } from '../entities/image.entity';
import { User } from '../../user/entities/user.entity';
import { Game } from '../../game/entities/game.entity';

export class CreateRoomDto {
  title: string;
  mode: boolean;
  status: boolean;
  users: User[];
  game: Game;
  images: Image[];
}
