import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Profile } from './profile.entity';
import { Room } from '../../room/entities/room.entity';

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

  @Column('jsonb', { nullable: true })
  invitedinfo: { inviteUser: string; inviteRoom: number }[];

  @OneToOne(() => Profile, (profile) => profile.user, { cascade: true })
  @JoinColumn()
  profile: Profile;

  @ManyToMany(() => Room, (room) => room.user)
  @JoinTable()
  room: Room[];

  @ManyToOne((type) => User, (user) => user.childUser)
  parentUser: User;

  @OneToMany((type) => User, (user) => user.parentUser)
  childUser: User[];
  // @ManyToOne(() => Friend, (friend) => friend.users, { cascade: true })
  // friend: Friend;
}
