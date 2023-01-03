import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
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

  @Column({ default: false })
  ready: boolean;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

  @ManyToOne(() => Room)
  rooms: Room[];

  @ManyToOne(() => Image)
  images: Image[];
}
