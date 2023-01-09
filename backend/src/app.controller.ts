import { Get, Controller, Render } from '@nestjs/common';
import { AwsService } from './aws.service';

@Controller('api')
export class AppController {
  constructor(private readonly awsService: AwsService) {}
  @Get()
  root() {
    return {
      data: {
        title: 'Chattings',
      },
    };
  }
}
