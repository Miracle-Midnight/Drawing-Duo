import { Body, Controller, Get, Post } from '@nestjs/common';
import { EnterRoomDto } from './dto/enter-room.dto';
import { LobbyService } from './lobby.service';

@Controller('api/lobby')
export class LobbyController {
  constructor(private readonly lobbyService: LobbyService) {}
  @Get()
  getLobby() {
    return this.lobbyService.getLobby();
  }

  @Post('in')
  inRoom(@Body() enterRoomDto: EnterRoomDto) {
    return this.lobbyService.inRoom(enterRoomDto);
  }

  @Post('out')
  outRoom(@Body() enterRoomDto: EnterRoomDto) {
    return this.lobbyService.outRoom(enterRoomDto);
  }
}
