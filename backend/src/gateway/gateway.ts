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
import { DrawLine } from './dto/gateway.dto';

@WebSocketGateway({ namespace: 'chattings' }) // 수정하기
export class ChatsAndDrawGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger = new Logger('chat');

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async handleDisconnect(@ConnectedSocket() socket: Socket) {
    this.logger.log(`disconnected: ${socket.id} ${socket.nsp.name}`);
    // const user = await this.userRepository.findOne({
    //   where: { socketid: socket.id },
    //   relations: ['profile'],
    // });
    // if (user) {
    //   socket.broadcast.emit('user_disconnected', user.profile.nickname);
    //   await this.userRepository.update(user.id, { socketid: null });
    // }
  }

  // connection 직후에 실행되는 함수
  handleConnection(@ConnectedSocket() socket: Socket) {
    this.logger.log(`connected: ${socket.id} ${socket.nsp.name}`);
    socket.on('client-ready', () => {
      socket.broadcast.emit('get-canvas-state');
    });
  }

  afterInit() {
    // constuctor() is called before afterInit()
    this.logger.log('init');
  }
  // userid를 받는다고 가정
  @SubscribeMessage('submit_message')
  async handleNewUser(
    @MessageBody() data: { userid: number; message: string },
    @ConnectedSocket() socket: Socket,
  ) {
    // user에 socket.id 컬럼 업데이트
    // await this.userRepository.update(userid, { socketid: socket.id });
    const user = await this.userRepository.findOne({
      where: { id: data.userid },
      relations: ['profile'],
    });

    socket.broadcast.emit('new_message', {
      name: user.profile.nickname,
      message: data.message,
    });
  }

  // @SubscribeMessage('submit_chat')
  // async handleSubmitChat(
  //   @MessageBody() chat: string,
  //   @ConnectedSocket() socket: Socket,
  // ) {
  //   // username 조회
  //   const user = await this.userRepository.findOne({
  //     where: { socketid: socket.id },
  //     relations: ['profile'],
  //   });

  //   socket.broadcast.emit('new_chat', {
  //     chat,
  //     username: user.profile.nickname,
  //   });
  // }

  @SubscribeMessage('canvas-state')
  handleCanvasState(@MessageBody() state, @ConnectedSocket() socket: Socket) {
    console.log('received canvas state');
    socket.broadcast.emit('canvas-state-from-server', state);
  }

  @SubscribeMessage('draw-line')
  handleDrawLine(
    @MessageBody() { prevPoint, currentPoint, color }: DrawLine,
    @ConnectedSocket() socket: Socket,
  ) {
    socket.broadcast.emit('draw-line', { prevPoint, currentPoint, color });
  }

  @SubscribeMessage('clear')
  handleClear(@ConnectedSocket() socket: Socket) {
    socket.emit('clear');
    socket.broadcast.emit('clear');
  }
}
