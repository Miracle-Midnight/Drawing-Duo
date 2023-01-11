import { Module } from '@nestjs/common';
import { MyGateway } from './draw.gateway';

@Module({
  imports: [MyGateway],
})
export class DrawGatewayModule {}
