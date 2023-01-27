import {
  Controller,
  Patch,
  Param,
  ParseIntPipe,
  Post,
  Get,
} from '@nestjs/common';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { GameUserReadyDto } from './dto/game-user-ready.dto';
import { GameService } from './game.service';
import {
  Body,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common/decorators';
// import { EnterGameDto } from './dto/enter-game.dto';
import { ApiOperation } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Patch()
  userReady(@Body() gameUserReadyDto: GameUserReadyDto) {
    return this.gameService.userReady(gameUserReadyDto);
  }

  @ApiOperation({ summary: '게임 입장' })
  @Get(':id') // roomid
  inGame(@Param('id', ParseIntPipe, PositiveIntPipe) id: number) {
    return this.gameService.inGame(id);
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
