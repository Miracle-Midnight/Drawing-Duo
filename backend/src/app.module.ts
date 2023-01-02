import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { UserModule } from './user/user.module';
import { RoomModule } from './room/room.module';
import { LobbyModule } from './lobby/lobby.module';
import { GameModule } from './game/game.module';
import { ResultController } from './result/result.controller';
import { ResultService } from './result/result.service';
import { ResultModule } from './result/result.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './config/typeorm.config';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [
    UserModule,
    RoomModule,
    LobbyModule,
    GameModule,
    ResultModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [AppController, ResultController],
  providers: [ResultService],
})
export class AppModule {}
