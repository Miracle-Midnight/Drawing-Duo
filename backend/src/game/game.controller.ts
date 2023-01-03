import { Controller, Get, Param, Post } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post(':id/user/:userId')
  userReady(@Param('id') id: string, @Param('userId') userId: string) {
    return this.gameService.userReady(+id, userId);
  }

  // 게임 생성과 동시에 room과 game이 연결됨
  @Post(':id')
  createGame(@Param('id') id: string) {
    return this.gameService.createGame(+id);
  }
}
