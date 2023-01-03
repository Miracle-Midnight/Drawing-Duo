import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root() {
    return { message: 'Hello world!' };
  }
}
