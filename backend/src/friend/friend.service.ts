import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FriendService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async serchUser(friendname: string) {
    const user = await this.userRepository.findOne({
      where: { userid: friendname },
    });
    return { friendId: user.id, friendName: user.userid };
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

  async getFriendList(userDto) {
    const { userid } = userDto;
    const user = await this.userRepository.findOne({
      where: { id: userid },
      relations: ['childUser'],
    });
    return user.childUser.map(this.childuserFilter);
  }

  readonly childuserFilter = (user: User) => ({
    id: user.id,
    userid: user.userid,
  });
}
