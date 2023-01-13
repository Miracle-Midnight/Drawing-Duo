import { Socket, Server } from 'socket.io';
import {
  OnGatewayInit,
  OnGatewayConnection,
  WebSocketGateway,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { MessageBody, SubscribeMessage } from '@nestjs/websockets';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

let rooms: string[] = [];

@WebSocketGateway({ namespace: 'room' })
export class RoomGateway implements OnGatewayInit, OnGatewayConnection {
  @WebSocketServer() server: Server;

  private logger = new Logger('RoomGateway');

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  afterInit() {
    this.logger.log('Init');
  }

  handleConnection(@ConnectedSocket() socket: Socket) {
    this.logger.log(`Client connected: ${socket.id} ${socket.nsp.name}`);
  }

  @SubscribeMessage('join-room')
  async handleJoin(@MessageBody() data, @ConnectedSocket() socket: Socket) {
    this.logger.log(`Client joined: ${socket.id} ${socket.nsp.name}`);
    if (rooms[data.roomId]) {
      if (rooms[data.roomId].length < 2) {
        socket.join(data.roomId);

        const user = await this.userRepository.findOne({
          where: { id: data.userId },
          relations: ['profile'],
        });

        socket.to(data.roomId).emit('user-connected', user.profile.nickname);
      } else {
        socket.to(socket.id).emit('room full');
      }
    }

    socket.join(data.roomId);
    rooms.push(data.roomId);
    socket.to(data.roomId).emit('user-connected', data.userId);
  }

  @SubscribeMessage('select-image')
  handleSelectImage(@MessageBody() data, @ConnectedSocket() socket: Socket) {
    this.logger.log(`Client selected image: ${socket.id} ${data.image}`);
    socket.to(data.roomId).emit('image selected', data.image);
  }

  @SubscribeMessage('leave')
  handleLeave(@MessageBody() data, @ConnectedSocket() socket: Socket) {
    this.logger.log(`Client left: ${socket.id} ${socket.nsp.name}`);
    socket.leave(data.roomId);
    socket.to(data.roomId).emit('user-disconnected', data.userId);
  }
}
