import { Controller } from '@nestjs/common';
import { FriendService } from './friend.service';
import { Get, Post, Body, Param } from '@nestjs/common';

@Controller('api/friend')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Get(':id')
  getFriend(@Param('id') userDto) {
    return this.friendService.getFriendList(userDto);
  }

  @Get('serch/:id')
  serchUser(@Param('id') friendname: string) {
    return this.friendService.serchUser(friendname);
  }

  @Post()
  addFriend(@Body() userDto) {
    return this.friendService.addFriend(userDto);
  }
}
