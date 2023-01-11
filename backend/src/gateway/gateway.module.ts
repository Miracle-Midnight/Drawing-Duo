import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { ChatsAndDrawGateway } from './gateway';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [ChatsAndDrawGateway],
})
export class ChatsAndDrawModule {}
