import { Controller, Get, Render } from '@nestjs/common';

@Controller('lobby')
export class LobbyController {
  @Get()
  @Render('lobby')
  async GetLobby(): Promise<void> {
    return;
  }
}
