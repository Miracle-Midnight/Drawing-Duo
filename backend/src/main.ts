import { NestFactory } from '@nestjs/core';
import { resolve } from 'path';
import * as path from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({ origin: '*' });
  app.useStaticAssets(path.join(__dirname, './common', 'uploads'), {
    prefix: '/media',
  });
  const PORT = process.env.PORT;
  await app.listen(PORT);
}
bootstrap();
