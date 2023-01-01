import { Controller, Body, Get, Post, Res } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { Response } from 'express';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async GetUserId(@Body() userDto: UserDto, @Res() res: Response) {
    return this.userService.GetUserId(userDto, res);
  }
}
