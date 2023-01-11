import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';
import { DrawLine } from './dto/gateway.dto';

@WebSocketGateway(3001)
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
  onClientReady() {
    this.server.emit('get-canvas-state');
  }

  @SubscribeMessage('canvas-state')
  onCanvasState(@MessageBody() state: any) {
    console.log('received canvas state');
    this.server.emit('canvas-state-from-server', state);
  }

  @SubscribeMessage('draw-line')
  onDrawLine(@MessageBody() { prevPoint, currentPoint, color }: DrawLine) {
    this.server.emit('draw-line', { prevPoint, currentPoint, color });
  }

  @SubscribeMessage('clear')
  onClear() {
    this.server.emit('clear');
  }
}
