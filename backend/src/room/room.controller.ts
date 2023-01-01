import { Controller, Get, Param, Render } from '@nestjs/common';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get(':id')
  @Render('room')
  async findOne(@Param('id') id: string) {
    return this.roomService.findOne(+id);
  }
}
