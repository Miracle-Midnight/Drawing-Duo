import { User } from 'src/user/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Image } from './image.entity';

@Entity()
export class Room extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  mode: boolean;

  @Column()
  status: boolean;

  @OneToMany(() => User, (user) => user.room)
  users: User[];

  @ManyToMany(() => Image)
  @JoinTable()
  images: Image[];
}
