import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Room } from 'src/room/entities/room.entity';
import { UserReadyDto } from './dto/user-ready.dto';

@Injectable()
export class GamelobbyService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
  ) {}
  async userReady(userReadyDto: UserReadyDto) {
    const { userid, roomid } = userReadyDto;
    const user = await this.userRepository.findOneBy({ id: userid });
    console.log(user);
    if (user.ready == true) {
      user.ready = false;
    } else {
      user.ready = true;
    }
    await this.userRepository.save(user);

    const room = await this.roomRepository.findOne({
      where: { id: roomid },
      relations: ['users'],
    });
    console.log(room);

    let cnt = 0;
    room.users.forEach((user) => {
      if (user.ready) {
        cnt++;
      }
    });

    return { cnt: cnt, success: true };
  }
}
