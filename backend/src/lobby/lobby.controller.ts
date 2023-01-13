import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { EnterRoomDto } from './dto/enter-room.dto';
import { LobbyService } from './lobby.service';

@Controller('lobby')
export class LobbyController {
  constructor(private readonly lobbyService: LobbyService) {}
  // @Get()
  // getLobby() {
  //   return this.lobbyService.getLobby();
  // }

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
