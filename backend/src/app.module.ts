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
// import { ConfigModule } from '@nestjs/config';
// import { typeOrmConfig } from './config/typeorm.config';
// import { dataSourceOptions } from 'db/data-source';
import { ChatsAndDrawModule } from './gateway/gateway.module';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AwsService } from './aws.service';
import { FriendModule } from './friend/friend.module';
import { GamelobbyModule } from './gamelobby/gamelobby.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { MiddlewareConsumer, NestModule } from '@nestjs/common';

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
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: ['dist/src/*/entities/*.entity.{js,ts}'],
      migrations: ['dist/db/migrations/*.{js.ts}'],
      synchronize: true,
      logging: true,
    }),
    ChatsAndDrawModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
      exclude: ['/api*'],
    }),
    AuthModule,
    FriendModule,
    GamelobbyModule,
  ],
  controllers: [AppController, ResultController],
  providers: [ResultService, AwsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
