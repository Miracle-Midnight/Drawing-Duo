import {
  Controller,
  Body,
  Get,
  Post,
  Res,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { Response } from 'express';
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
  signUp(@Body() userDto: UserDto) {
    return this.userService.signUp(userDto);
  }

  @Post('login')
  GetUserId(@Body() userDto: UserDto) {
    // return 'GetUserId';
    // return this.userService.GetUserId(userDto, res);
    return this.authService.jwtLogIn(userDto);
  }

  @Get('logout')
  Logout(@Res() res: Response) {
    res.redirect('/');
  }
  // form-data와 json 같이 받는 작업
  @UseInterceptors(FileInterceptor('image', multerOptions('profile')))
  @Post('upload')
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() userDto) {
    console.log(file);
    console.log(userDto);
    // return { image: `http://localhost:3000/media/profile/${file.filename}` };
    return this.userService.uploadImg(userDto, file);
  }

  //이미지 두개 이상 받아서 유사도 측정 api
  // @UseInterceptors(FilesInterceptor('files', multerOptions('similarity')))
  // @Post('uploads')
  // Similarity(@UploadedFiles() files: Array<Express.Multer.File>) {
  //   console.log(files);
  //   return { image: `http://localhost:3000/media/profile/${file.filename}` };
  //   // return this.userService.uploadImg(userDto, file);
  // }
}
