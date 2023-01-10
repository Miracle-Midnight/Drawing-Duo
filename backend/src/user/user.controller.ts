import {
  Controller,
  Body,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  Param,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/common/utils/multer.options';
import { AuthService } from 'src/auth/auth.service';

@Controller('api/users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  @UseInterceptors(FileInterceptor('image'))
  async signUp(
    @UploadedFile() file: Express.Multer.File,
    @Body() userDto: UserDto,
  ) {
    return this.userService.signUp(userDto, 'profile', file);
  }

  @Post('login')
  GetUserId(@Body() userDto: UserDto) {
    // return 'GetUserId';
    // return this.userService.GetUserId(userDto, res);
    return this.authService.jwtLogIn(userDto);
  }

  @UseInterceptors(FileInterceptor('image', multerOptions('profile')))
  @Post('upload')
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() userDto) {
    console.log(file);
    console.log(userDto);
    // return { image: `http://localhost:3000/media/profile/${file.filename}` };
    return this.userService.uploadImg(userDto, file);
  }
}
