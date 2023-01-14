import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Room } from './room.entity';

@Entity()
export class Image extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: boolean; // game: true, profile: false

  @Column({ nullable: true })
  image: string;

  @Column('jsonb', { nullable: true })
  rgb: { r: number; g: number; b: number }[];

  @Column({ nullable: true })
  frameImage: string;

  @OneToMany(() => Room, (room) => room.image)
  room: Room[];
}
