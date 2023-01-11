import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from 'src/auth/auth.module';
import { Image } from 'src/room/entities/image.entity';
import { AwsService } from 'src/aws.service';
import * as multer from 'multer';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Profile, Image]),
    MulterModule.register({
      dest: './uploads',
      storage: multer.memoryStorage(),
    }),
    // forwardRef(() => AuthModule),
    AuthModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
