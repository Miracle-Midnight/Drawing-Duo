import { Controller, Get, Render } from '@nestjs/common';

@Controller('lobby')
export class LobbyController {
  @Get()
  async GetLobby(): Promise<void> {
    return;
  }
}
