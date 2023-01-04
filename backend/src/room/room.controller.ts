import { Controller, Get, Param } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';

@Controller('api/room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomService.findOne(+id);
  }

  @Post()
  createRoom(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.createRoom(createRoomDto);
  }

  @Post(':id')
  deleteRoom(@Param('id') id: string) {
    return this.roomService.deleteRoom(+id);
  }
}
