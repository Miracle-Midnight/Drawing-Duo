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
import { Room } from 'src/room/entities/room.entity';
import { Repository } from 'typeorm';

let rooms: string[] = [];

@WebSocketGateway({ namespace: 'room' })
export class RoomGateway implements OnGatewayInit, OnGatewayConnection {
  @WebSocketServer() server: Server;

  private logger = new Logger('RoomGateway');

  constructor(
    // @InjectRepository(Room) private roomRepository: Repository<Room>,
  ) {}

  afterInit() {
    this.logger.log('Init');
  }

  handleConnection(@ConnectedSocket() socket: Socket) {
    this.logger.log(`Client connected: ${socket.id} ${socket.nsp.name}`);
  }

  @SubscribeMessage('join')
  handleJoin(@MessageBody() data, @ConnectedSocket() socket: Socket) {
    this.logger.log(`Client joined: ${socket.id} ${socket.nsp.name}`);
    if (rooms[data.room]) {
      if (rooms[data.room].length < 2) {
        socket.join(data.room);
        socket.to(data.room).emit('join', data.room);
      } else {
        socket.to(socket.id).emit('room full');
      }
    }
    socket.join(data.room);
    rooms.push(data.room);
    socket.to(data.room).emit('join', data.room);
  }

  @SubscribeMessage('leave')
  handleLeave(@MessageBody() data, @ConnectedSocket() socket: Socket) {
    this.logger.log(`Client left: ${socket.id} ${socket.nsp.name}`);
    socket.leave(data.room);
    socket.to(data.room).emit('leave', data.room);
  }
}
