import { Socket } from 'socket.io';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';

@WebSocketGateway({ namespace: 'chattings' })
export class ChatsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger = new Logger('chat');

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async handleDisconnect(@ConnectedSocket() socket: Socket) {
    this.logger.log(`disconnected: ${socket.id} ${socket.nsp.name}`);
    const user = await this.userRepository.findOne({
      where: { socketid: socket.id },
      relations: ['profile'],
    });
    if (user) {
      socket.broadcast.emit('user_disconnected', user.profile.nickname);
      await this.userRepository.update(user.id, { socketid: null });
    }
  }

  // connection 직후에 실행되는 함수
  handleConnection(@ConnectedSocket() socket: Socket) {
    this.logger.log(`connected: ${socket.id} ${socket.nsp.name}`);
  }

  afterInit() {
    // constuctor() is called before afterInit()
    this.logger.log('init');
  }

  @SubscribeMessage('new-user')
  async handleNewUser(
    @MessageBody() username: string,
    @ConnectedSocket() socket: Socket,
  ) {
    // user에 socket.id 컬럼 업데이트
    await this.userRepository.update(+username, { socketid: socket.id });

    socket.broadcast.emit('user_connected', username);
    return username;
  }

  @SubscribeMessage('submit_chat')
  async handleSubmitChat(
    @MessageBody() chat: string,
    @ConnectedSocket() socket: Socket,
  ) {
    // username 조회
    const user = await this.userRepository.findOne({
      where: { socketid: socket.id },
      relations: ['profile'],
    });

    socket.broadcast.emit('new_chat', {
      chat,
      username: user.profile.nickname,
    });
  }
}
