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

  @Column({ default: false, nullable: true })
  modified: boolean; // room완성 image:true

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  frameImage: string;

  @Column('jsonb', { nullable: true })
  rgb: { b: number; g: number; r: number }[];

  // @Column({ nullable: true })
  // Ymap: string;

  @OneToMany(() => Room, (room) => room.image)
  room: Room[];
}
