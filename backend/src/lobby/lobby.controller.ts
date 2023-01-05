import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { LobbyService } from './lobby.service';

@Controller('lobby')
export class LobbyController {
  constructor(private readonly lobbyService: LobbyService) {}
  @Get()
  @Render('lobby')
  async GetLobby(): Promise<void> {
    return;
  }

  @Post(':id')
  inRoom(@Body() userid, @Param('id') roomid: string) {
    console.log(userid);
    return this.lobbyService.inRoom(userid, +roomid);
  }
}
