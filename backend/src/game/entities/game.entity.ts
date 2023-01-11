import { BaseEntity, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

import { Room } from 'src/room/entities/room.entity';

@Entity()
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @OneToOne(() => Room, (room) => room.game, { cascade: true })
  room: Room;
}
