import { Controller, Get, Param } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameService.findOne(+id);
  }

  @Get(':id/user/:userId')
  findUser(@Param('id') id: string, @Param('userId') userId: string) {
    return this.gameService.findUser(+id, userId);
  }
}
