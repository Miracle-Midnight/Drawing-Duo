import { Controller } from '@nestjs/common';
import { FriendService } from './friend.service';
import { Get, Post, Body, Param } from '@nestjs/common';
import { Req, UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

@Controller('friend')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  getFriend(@Req() req, @Param('id') userDto) {
    return this.friendService.getFriendList(userDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Get('serch/:id')
  serchUser(@Req() req, @Param('id') friendname: string) {
    return this.friendService.serchUser(friendname);
  }

  @Post()
  addFriend(@Body() userDto) {
    return this.friendService.addFriend(userDto);
  }
}
