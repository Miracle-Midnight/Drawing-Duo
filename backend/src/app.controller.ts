import { Get, Controller, Render } from '@nestjs/common';
import { AwsService } from './aws.service';

@Controller()
export class AppController {
  constructor(private readonly awsService: AwsService) {}
  @Get()
  getHello() {
    return 'Hello, world!';
  }
}
