import { IsNotEmpty, IsString } from 'class-validator';
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
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Room extends BaseEntity {
  @ApiProperty({
    example: '1',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: '방 제목',
  })
  @IsString()
  @IsNotEmpty()
  @Column({ nullable: false, unique: true })
  title: string;

  @OneToMany(() => User, (user) => user.room)
  users: User[];

  @ManyToMany(() => Image)
  @JoinTable()
  images: Image[];
}
