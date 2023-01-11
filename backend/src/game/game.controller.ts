import { Controller, Patch, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { GameUserReadyDto } from './dto/game-user-ready.dto';
import { GameService } from './game.service';
import { Body } from '@nestjs/common/decorators';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Patch()
  userReady(@Body() gameUserReadyDto: GameUserReadyDto) {
    return this.gameService.userReady(gameUserReadyDto);
  }

  // 게임 생성과 동시에 room과 game이 연결됨
  @Post('create/:id') // roomid
  createGame(@Param('id', ParseIntPipe, PositiveIntPipe) id: number) {
    return this.gameService.createGame(id);
  }

  @Post('delete/:id') // gameid
  deleteGame(@Param('id', ParseIntPipe, PositiveIntPipe) id: number) {
    return this.gameService.deleteGame(id);
  }
}
