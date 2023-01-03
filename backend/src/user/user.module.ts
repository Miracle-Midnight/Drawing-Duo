import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Profile]),
    MulterModule.register({ dest: './uploads' }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
