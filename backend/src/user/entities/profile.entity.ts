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

  @Column({ default: 999 })
  level: number;

  @Column({ default: 10000 })
  rank: number;

  @Column({ default: '안녕하세요', type: 'text' })
  introduction: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
