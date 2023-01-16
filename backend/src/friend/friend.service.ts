import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class FriendService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async serchUser(friendname: string) {
    const user = await this.userRepository.find({
      where: { userid: Like(`%${friendname}%`) },
    });
    console.log(user);
    return user.map(this.childuserFilter);
  }

  async addFriend(@Body() userDto) {
    const { userId, friendId } = userDto;

    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['childUser'],
    });

    user.childUser.forEach((element) => {
      if (element.id == friendId) {
        throw new Error('이미 친구입니다.');
      }
    });

    const friend = await this.userRepository.findOne({
      where: { id: friendId },
    });
    user.childUser.push(friend);
    await this.userRepository.save(user);
    return user.childUser.map(this.childuserFilter);
  }

  async getFriendList(userid) {
    const user = await this.userRepository.findOne({
      where: { id: userid },
      relations: ['childUser', 'childUser.profile'],
    });
    return user.childUser.map(this.childuserFilterAddnic);
  }

  async inviteFriend(inviteDto) {
    const { userId, friendId, roomid } = inviteDto; //userId= username
    const invitedUser = await this.userRepository.findOne({
      where: { id: friendId },
    });
    invitedUser.inviteuser = [...invitedUser.inviteuser, userId];
    invitedUser.inviteroom = [...invitedUser.inviteroom, roomid];
    await this.userRepository.save(invitedUser);
    return invitedUser;
  }

  async getInvite(userid) {
    const user = await this.userRepository.findOne({
      where: { id: userid },
    });
    return { inviteuser: user.inviteuser, inviteroom: user.inviteroom };
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
