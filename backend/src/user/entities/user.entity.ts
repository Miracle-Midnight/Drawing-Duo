import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Profile } from './profile.entity';
import { Room } from '../../room/entities/room.entity';
import { Image } from '../../room/entities/image.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: boolean;

  @Column()
  userid: string;

  @Column()
  password: string;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

  @ManyToOne(() => Room, (room) => room.users)
  room: Room;

  @ManyToOne(() => Image)
  images: Image[];
}
