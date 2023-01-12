import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: boolean; // game: true, profile: false

  @Column()
  image: string;

  @Column({ nullable: true })
  converted: string;
}
