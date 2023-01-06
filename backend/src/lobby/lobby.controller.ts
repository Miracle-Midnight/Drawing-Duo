import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { LobbyService } from './lobby.service';

@Controller('api/lobby')
export class LobbyController {
  constructor(private readonly lobbyService: LobbyService) {}
  @Get()
  getLobby() {
    return this.lobbyService.getLobby();
  }

  @Post(':id')
  inRoom(@Body() userid, @Param('id') roomid: string) {
    console.log(userid);
    return this.lobbyService.inRoom(userid, +roomid);
  }
}
