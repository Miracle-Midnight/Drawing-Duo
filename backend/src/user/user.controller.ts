import {
  Controller,
  Body,
  Get,
  Post,
  Res,
  UseInterceptors,
  UploadedFile,
  Param,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { Response } from 'express';
import { UserService } from './user.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/common/utils/multer.options';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  GetUserId(@Body() userDto: UserDto, @Res() res: Response) {
    // return 'GetUserId';
    return this.userService.GetUserId(userDto, res);
  }

  @Get('logout')
  Logout(@Res() res: Response) {
    res.redirect('/');
  }

  @UseInterceptors(FileInterceptor('image', multerOptions('profile')))
  @Post('upload')
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return { image: `http://localhost:3000/media/profile/${file.filename}` };
    // return this.userService.uploadImg(userid, file);
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
