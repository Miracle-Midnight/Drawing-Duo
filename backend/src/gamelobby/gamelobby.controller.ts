import { Controller } from '@nestjs/common';
import { GamelobbyService } from './gamelobby.service';
import { Patch, Body } from '@nestjs/common/decorators';
import { UserReadyDto } from './dto/user-ready.dto';

@Controller('gamelobby')
export class GamelobbyController {
  constructor(private readonly gameLobbyService: GamelobbyService) {}

  @Patch()
  userReady(@Body() userReadyDto: UserReadyDto) {
    return this.gameLobbyService.userReady(userReadyDto);
  }
}
