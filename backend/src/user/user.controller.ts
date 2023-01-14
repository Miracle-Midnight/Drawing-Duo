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

@Controller('users')
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

  // 그림이미지 원본과, 프레임 이미지 저장.
  @UseInterceptors(FilesInterceptor('image', 2))
  @Post('uploads')
  uploadFile(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() userDto,
  ) {
    return this.userService.uploadImg(userDto, 'game', files);
  }

  @Post('rgb/:id') // image id
  saveRGB(@Param('id') id: number, @Body() rgbDto) {
    return this.userService.saveRGB(id, rgbDto);
  }
}
