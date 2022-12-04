import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.PORT || 3000, process.env.HOST || 'localhost');
  const url = await app.getUrl();
  Logger.log(`Server started on ${url}`, 'NestApplication');
}
bootstrap();
