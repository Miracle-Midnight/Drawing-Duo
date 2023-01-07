import { Image } from 'src/room/entities/image.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
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

  @Column({ default: 0 })
  level: number;

  @Column({ nullable: true })
  rank: number;

  @Column({ default: '안녕하세요', type: 'text' })
  introduction: string;

  @OneToOne(() => User, (user) => user.profile, { onDelete: 'CASCADE' })
  user: User;

  @OneToOne(() => Image)
  @JoinColumn()
  image: Image;
}
