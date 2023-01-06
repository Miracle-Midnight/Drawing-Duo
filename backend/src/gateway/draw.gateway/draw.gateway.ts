import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';

import { Point, DrawLine } from './dto/draw-gateway.dto';

@WebSocketGateway(80)
export class MyGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(`Connected: ${socket.connected}`);
      //   socket.on('client-ready', () => {
      //     socket.broadcast.emit('get-canvas-state');
      //   });
      //   socket.on('canvas-state', (state) => {
      //     console.log('received canvas state');
      //     socket.broadcast.emit('canvas-state-from-server', state);
      //   });
      //   socket.on('draw-line', ({ prevPoint, currentPoint, color }: DrawLine) => {
      //     socket.broadcast.emit('draw-line', { prevPoint, currentPoint, color });
      //   });
      //   socket.on('clear', () => this.server.emit('clear'));
    });
  }

  @SubscribeMessage('message')
  onNewMessage(@MessageBody() body): any {
    console.log(body);
    this.server.emit('onMessage', body);
  }

  @SubscribeMessage('client-ready')
  onClientReady(@MessageBody() body): any {
    console.log(body);
    this.server.emit('get-canvas-state');
  }

  @SubscribeMessage('canvas-state')
  onCanvasState(@MessageBody() body): any {
    console.log(body);
    this.server.emit('canvas-state-from-server', body);
  }

  @SubscribeMessage('draw-line')
  onDrawLine(@MessageBody() body): any {
    console.log(body);
    this.server.emit('draw-line', body);
  }

  @SubscribeMessage('clear')
  onClear(@MessageBody() body): any {
    console.log(body);
    this.server.emit('clear');
  }
}
