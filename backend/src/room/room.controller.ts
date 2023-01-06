import { Controller, Get, Param, Render } from '@nestjs/common';
import { Body, Delete, Post } from '@nestjs/common/decorators';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post(':id') // user id
  createRoom(@Param('id') id: string, @Body() createRoomDto: CreateRoomDto) {
    return this.roomService.createRoom(+id, createRoomDto);
  }

  @Delete(':id') // room id
  deleteRoom(@Param('id') id: string) {
    return this.roomService.deleteRoom(+id);
  }
}
