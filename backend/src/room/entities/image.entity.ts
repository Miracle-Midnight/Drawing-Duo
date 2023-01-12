import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: boolean; // game: true, profile: false

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  frameImage: string;
}
