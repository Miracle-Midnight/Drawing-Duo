import { Body, Injectable, Res } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { Response } from 'express';

@Injectable()
export class UserService {
  async GetUserId(@Body() userDto: UserDto, @Res() res: Response) {
    console.log(userDto.username, userDto.password);
    res.redirect('/lobby');
  }
}
