import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { UserModule } from './user/user.module';
import { RoomModule } from './room/room.module';
import { LobbyModule } from './lobby/lobby.module';
import { GameModule } from './game/game.module';
import { ResultController } from './result/result.controller';
import { ResultService } from './result/result.service';
import { ResultModule } from './result/result.module';

@Module({
  imports: [UserModule, RoomModule, LobbyModule, GameModule, ResultModule],
  controllers: [AppController, ResultController],
  providers: [ResultService],

})
export class AppModule {}
