import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { ApiOperation } from '@nestjs/swagger';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { EnterRoomDto } from './dto/enter-room.dto';
import { LobbyService } from './lobby.service';

@Controller('lobby')
export class LobbyController {
  constructor(private readonly lobbyService: LobbyService) {}

  @ApiOperation({ summary: '내 방 조회' })
  @Get(':id') // user id
  getmyroom(@Param('id', ParseIntPipe, PositiveIntPipe) userid: number) {
    return this.lobbyService.myroom(userid);
  }

  @ApiOperation({ summary: '방 입장' })
  @Post('in')
  inRoom(@Body() enterRoomDto: EnterRoomDto) {
    return this.lobbyService.inRoom(enterRoomDto);
  }

  @ApiOperation({ summary: '방 나가기' })
  @Post('out')
  outRoom(@Body() enterRoomDto: EnterRoomDto) {
    return this.lobbyService.outRoom(enterRoomDto);
  }
}
