import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  // ManyToMany,
} from 'typeorm';
// import { Room } from './room.entity';

@Entity()
export class Image extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: boolean;

  // @ManyToMany(() => Room)
  @Column()
  image: string;
}
