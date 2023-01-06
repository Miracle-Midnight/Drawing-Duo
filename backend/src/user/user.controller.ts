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

@Controller('api/users')
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
  @UseInterceptors(FilesInterceptor('image', 2, multerOptions('similarity')))
  @Post('uploads')
  Similarity(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    return {
      image1: `http://localhost:3000/media/similarity/${files[0].filename}`,
      image2: `http://localhost:3000/media/similarity/${files[1].filename}`,
    };
    // return this.userService.similarity(files);
  }

  // Make a new user(테스트용)
  //   {
  //     "userid":"kcw2297",
  // "password":"1234",
  // "nickname":"master"

  // }
  // 위를 postman으로 보내면 생성됩니다
  @Post('create')
  createUser(@Body() body) {
    return this.userService.createUser(body);
  }

  // Make a new user(테스트용)
  @Get(':id')
  getProfile(@Param('id') id: string) {
    return this.userService.getProfile(+id);
  }
}
