import { Game } from 'src/game/entities/game.entity';
import { User } from 'src/user/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  JoinColumn,
  OneToOne,
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

  @OneToOne(() => Game, (game) => game.room, { onDelete: 'CASCADE' })
  @JoinColumn()
  game: Game;

  @ManyToMany(() => Image)
  @JoinTable()
  images: Image[];
}
