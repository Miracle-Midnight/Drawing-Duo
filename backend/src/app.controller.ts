import { Get, Controller } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get()
  root() {
    return {
      data: {
        title: 'Chattings',
      },
    };
  }
}
