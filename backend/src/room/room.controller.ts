import { Controller, Get, Param } from '@nestjs/common';
import { Body, Delete, Post } from '@nestjs/common/decorators';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ReadOnlyRoomDto } from './dto/room.dto';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @ApiOperation({ summary: '이미지 전체 조회' })
  @Get()
  getAllImage() {
    return this.roomService.getAllImage();
  }

  @ApiResponse({
    description: '방 생성 성공!',
    type: ReadOnlyRoomDto,
  })
  @ApiOperation({ summary: '방 생성' })
  @Post(':id') // user id
  createRoom(
    @Param('id', ParseIntPipe, PositiveIntPipe) id: number,
    @Body() createRoomDto: CreateRoomDto,
  ) {
    return this.roomService.createRoom(id, createRoomDto);
  }

  @Delete(':id') // room id
  deleteRoom(@Param('id', ParseIntPipe, PositiveIntPipe) id: number) {
    return this.roomService.deleteRoom(id);
  }
}
