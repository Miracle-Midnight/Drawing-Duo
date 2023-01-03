import { NestFactory } from '@nestjs/core';

import { NestExpressApplication } from '@nestjs/platform-express';
import { resolve } from 'path';
import * as path from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(resolve('./src/public'));
  app.setBaseViewsDir(resolve('./src/views'));
  app.setViewEngine('hbs');

  app.useStaticAssets(path.join(__dirname, './common', 'uploads'), { //path: Drawing-Duo\backend\src\common\uploads
    prefix: '/media',
  });

  await app.listen(3000);
}
bootstrap();
