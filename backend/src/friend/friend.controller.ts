import { Controller } from '@nestjs/common';
import { FriendService } from './friend.service';
import { Get, Post, Body, Param } from '@nestjs/common';
import { Req, UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { ApiOperation } from '@nestjs/swagger';
import { InviteDto } from './dto/invite.dto';
import { InviteAcceptDto } from './dto/invite-accept.dto';

@Controller('friend')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @ApiOperation({ summary: '친구 목록 보기' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id') // user id
  getFriend(@Req() req, @Param('id') userid) {
    return this.friendService.getFriendList(userid);
  }

  @ApiOperation({ summary: '유저 검색' })
  // @UseGuards(JwtAuthGuard)
  @Get('serch/:id') // username
  serchUser(@Param('id') friendname: string) {
    console.log(friendname);
    return this.friendService.serchUser(friendname);
  }

  @ApiOperation({ summary: '친구 추가' })
  @Post()
  addFriend(@Body() userDto) {
    return this.friendService.addFriend(userDto);
  }

  @ApiOperation({ summary: '친구 초대 보내기' })
  @Post('invite')
  inviteFriend(@Body() inviteDto: InviteDto) {
    return this.friendService.inviteFriend(inviteDto);
  }

  @ApiOperation({ summary: '초대받은 목록 보기' })
  @Get('invite/:id') //user primary key
  getInvite(@Param('id') userid: number) {
    return this.friendService.getInvite(userid);
  }

  @ApiOperation({ summary: '초대 수락' })
  @Post('invite/accept')
  acceptInvite(@Body() inviteDto: InviteAcceptDto) {
    return this.friendService.acceptInvite(inviteDto);
  }

  @ApiOperation({ summary: '초대 거절' })
  @Post('invite/reject')
  rejectInvite(@Body() inviteDto: InviteAcceptDto) {
    return this.friendService.rejectInvite(inviteDto);
  }
}
