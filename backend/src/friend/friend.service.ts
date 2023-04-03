import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Like, Repository } from 'typeorm';
import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { InviteDto } from './dto/invite.dto';
import { InviteAcceptDto } from './dto/invite-accept.dto';
import { Room } from 'src/room/entities/room.entity';

@Injectable()
export class FriendService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
  ) {}

  async serchUser(friendname: string) {
    const user = await this.userRepository.find({
      where: { userid: Like(`%${friendname}%`) },
    });
    return user.map(this.childuserFilter);
  }

  async addFriend(@Body() userDto) {
    const { userId, friendId } = userDto;

    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: {
        friends: true,
      },
    });

    // 친구 중복 체크
    if (user.friends.length > 0) {
      const DuplicateFriends = user.friends.find(
        (element) => element.id == friendId,
      );
      if (DuplicateFriends) {
        throw new ForbiddenException('이미 친구입니다.');
      }
    }

    const friend = await this.userRepository.findOne({
      where: { id: friendId },
    });
    user.friends.push(friend);
    await this.userRepository.save(user);
    return user.friends.map(this.childuserFilter);
  }

  async getFriendList(userid) {
    const user = await this.userRepository.findOne({
      where: { id: userid },
      relations: ['friends', 'friends.profile'],
    });
    console.log(user);
    return user.friends.map(this.childuserFilterAddnic);
  }

  async inviteFriend(inviteDto: InviteDto) {
    const { userId, nickname, friendId, roomId } = inviteDto; //userId = username
    const invitedUser = await this.userRepository.findOne({
      where: { id: friendId },
    });

    if (invitedUser.invitedinfo == null) {
      invitedUser.invitedinfo = [
        { inviteUser: userId, inviteNickname: nickname, inviteRoom: roomId },
      ];
      await this.userRepository.save(invitedUser);
      return invitedUser;
    }

    const DuplicateUsers = invitedUser.invitedinfo.find(
      (element) => element.inviteUser == userId,
    );
    if (DuplicateUsers) {
      throw new ForbiddenException('이미 초대한 유저입니다.');
    }
    invitedUser.invitedinfo = [
      ...invitedUser.invitedinfo,
      { inviteUser: userId, inviteNickname: nickname, inviteRoom: roomId },
    ];
    await this.userRepository.save(invitedUser);
    return invitedUser;
  }

  async getInvite(userid) {
    const user = await this.userRepository.findOne({
      where: { id: userid },
    });
    return user.invitedinfo;
  }

  async acceptInvite(inviteDto: InviteAcceptDto) {
    const { userId, inviteUser, roomId } = inviteDto;

    // 해당 초대목록 삭제
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    user.invitedinfo = user.invitedinfo.filter(
      (element) => element.inviteUser != inviteUser,
    );
    await this.userRepository.save(user);

    // 방 입장
    const targetRoom = await this.roomRepository.findOne({
      where: { id: roomId },
      relations: ['user', 'user.profile'],
    });
    if (!targetRoom) throw new NotFoundException('방이 존재하지 않습니다.');

    if (targetRoom.user.length >= 2) {
      throw new ForbiddenException('방이 꽉 찼습니다.');
    }

    const userinfo = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['room', 'profile'],
    });
    if (!userinfo) throw new NotFoundException('유저가 존재하지 않습니다.');

    userinfo.room = [...userinfo.room, targetRoom];
    await this.userRepository.save(userinfo);

    return {
      userNickName: userinfo.profile.nickname,
      roomUser: targetRoom.user[0].profile.nickname,
    };
  }

  async rejectInvite(inviteDto: InviteAcceptDto) {
    const { userId, inviteUser } = inviteDto;

    // 해당 초대목록 삭제
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    user.invitedinfo = user.invitedinfo.filter(
      (element) => element.inviteUser != inviteUser,
    );
    await this.userRepository.save(user);
    return user.invitedinfo;
  }

  readonly childuserFilter = (user: User) => ({
    id: user.id,
    userid: user.userid,
  });

  readonly childuserFilterAddnic = (user: User) => ({
    id: user.id,
    userid: user.userid,
    nickname: user.profile.nickname,
  });
}
