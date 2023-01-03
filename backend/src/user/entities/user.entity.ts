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

  @Column({ default: false })
  type: boolean;

  @Column()
  userid: string;

  @Column()
  password: string;

  @Column({ default: false })
  ready: boolean;

  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn()
  profile: Profile;

  @ManyToOne(() => Room, (room) => room.users)
  room: Room;

  @ManyToOne(() => Image)
  images: Image[];
}
