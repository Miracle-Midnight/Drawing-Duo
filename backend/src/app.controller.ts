import { Get, Controller, Render } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get()
  root() {
    return { message: 'Hello world!' };
  }
}
