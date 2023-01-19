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

@WebSocketGateway({
  cors: { origin: '*', methods: ['GET', 'POST'] },
})
export class RoomGateway implements OnGatewayInit, OnGatewayConnection {
  @WebSocketServer() server: Server;

  private logger = new Logger('RoomGateway');
  // socked.id, roomId
  roomMap: Map<string, string>;

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {
    this.roomMap = new Map();
  }

  afterInit() {
    this.logger.log('Init');
  }

  handleConnection(@ConnectedSocket() socket: Socket) {
    this.logger.log(`Client connected: ${socket.id} ${socket.nsp.name}`);
  }

  @SubscribeMessage('join_room')
  async handleJoin(@MessageBody() data, @ConnectedSocket() socket: Socket) {
    socket.join(data.roomId);
    this.logger.log(`Client joined: ${socket.id} ${data.roomId}`);
    this.roomMap.set(socket.id, data.roomId);
    console.log(this.roomMap);
    const usersInRoom = this.server.sockets.adapter.rooms.get(data.roomId);
    if (usersInRoom.size >= 1) {
      socket.to(data.roomId).emit('all_users', Array.from(usersInRoom));
    }
    const user = await this.userRepository.find({
      where: { id: data.userId },
      relations: ['profile', 'profile.image'],
    });
    socket.to(data.roomId).emit('new_user', user);
  }

  @SubscribeMessage('offer')
  handleOffer(@MessageBody() data, @ConnectedSocket() socket: Socket) {
    this.logger.log(`Client sent offer: ${socket.id} ${socket.nsp.name}`);
    socket.to(data.roomId).emit('getOffer', data.sdp);
  }

  @SubscribeMessage('answer')
  handleAnswer(@MessageBody() data, @ConnectedSocket() socket: Socket) {
    this.logger.log(`Client sent answer: ${socket.id} ${socket.nsp.name}`);
    socket.to(data.roomId).emit('getAnswer', data.sdp);
  }

  @SubscribeMessage('candidate')
  handleCandidate(@MessageBody() data, @ConnectedSocket() socket: Socket) {
    this.logger.log(`Client sent candidate: ${socket.id} ${socket.nsp.name}`);
    socket.to(data.roomId).emit('getCandidate', data.candidate);
  }

  @SubscribeMessage('select-image')
  handleSelectImage(@MessageBody() data, @ConnectedSocket() socket: Socket) {
    this.logger.log(`Client selected image: ${socket.id} ${data.image}`);
    socket.to(data.roomId).emit('image selected', data.image);
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data, @ConnectedSocket() socket: Socket) {
    this.logger.log(`Client sent message: ${socket.id} ${data.message}`);
    socket.to(data.roomId).emit('message', data.name, data.message);
  }

  @SubscribeMessage('disconnect')
  handleDisconnect(@ConnectedSocket() socket: Socket) {
    this.logger.log(`Client disconnected: ${socket.id} ${socket.nsp.name}`);
    socket.broadcast
      .to(this.roomMap.get(socket.id))
      .emit('user_exit', socket.id);
    this.roomMap.delete(socket.id);
    console.log(this.roomMap);
  }
}
