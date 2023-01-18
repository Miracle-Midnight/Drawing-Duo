import { Controller, Get, Param } from '@nestjs/common';
import { Body, Delete, Post } from '@nestjs/common/decorators';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ReadOnlyRoomDto } from './dto/room.dto';
import { SelectImageDto } from './dto/select-image.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { UseInterceptors } from '@nestjs/common/decorators/core/use-interceptors.decorator';
import { UploadedFile } from '@nestjs/common/decorators/http/route-params.decorator';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  // pagination 구현하기, 구현 시 cache 빼기
  @ApiOperation({ summary: '이미지 전체 조회' })
  @Get()
  getAllImage() {
    return this.roomService.getAllImage();
  }

  @ApiOperation({ summary: '이미지 선택' })
  @Post()
  selectImage(@Body() selectImageDto: SelectImageDto) {
    return this.roomService.selectImage(selectImageDto);
  }

  @Post('save/:id') // room id
  @UseInterceptors(FileInterceptor('image'))
  saveImage(@UploadedFile() file: Express.Multer.File, @Param('id') roomid) {
    return this.roomService.saveImage(+roomid, 'roomimg', file);
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
  deleteRoom(
    @Param('id', ParseIntPipe, PositiveIntPipe) id: number,
    @Body() userid,
  ) {
    return this.roomService.deleteRoom(id, userid);
  }
}
