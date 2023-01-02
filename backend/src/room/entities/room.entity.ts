import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Image } from './image.entity';

@Entity()
export class Room extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  mode: boolean;

  @Column()
  public: boolean;

  @ManyToMany(() => Image)
  @JoinTable()
  images: Image[];
}
