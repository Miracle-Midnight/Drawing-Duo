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

  @Column({ nullable: true })
  socketid: string;

  @Column()
  password: string;

  @Column({ default: false })
  ready: boolean;

  @OneToOne(() => Profile, (profile) => profile.user, { cascade: true })
  @JoinColumn()
  profile: Profile;

  @ManyToOne(() => Room, (room) => room.users, { onDelete: 'SET NULL' })
  room: Room;
}
