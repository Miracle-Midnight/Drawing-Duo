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
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AwsService } from './aws.service';
import { FriendModule } from './friend/friend.module';
import { GamelobbyModule } from './gamelobby/gamelobby.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { RoomGatewayModule } from './gateway/gateway.module';
import { dataSourceOptions } from 'db/data-source';
import { AppService } from './app.service';

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
    TypeOrmModule.forRoot(dataSourceOptions),
    RoomGatewayModule,
    AuthModule,
    FriendModule,
    GamelobbyModule,
  ],
  controllers: [AppController, ResultController],
  providers: [ResultService, AwsService, AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
