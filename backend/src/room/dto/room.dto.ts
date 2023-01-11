import { ApiProperty, PickType } from '@nestjs/swagger';
import { Room } from '../entities/room.entity';

export class ReadOnlyRoomDto extends PickType(Room, ['id', 'title'] as const) {
  @ApiProperty({
    example: '유저 닉네임',
    description: 'userNickName',
  })
  userNickName: string;
}
