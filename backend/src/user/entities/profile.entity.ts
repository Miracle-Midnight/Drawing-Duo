import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  level: number;

  @Column()
  rank: number;

  @Column('text')
  introduction: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
