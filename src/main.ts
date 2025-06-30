import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  console.log('JWT_SECRET from process.env:', process.env.JWT_SECRET);
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes( new ValidationPipe({
    whitelist: true,
     transform: true,
  }),);
  app.enableCors({
    origin: 'http://localhost:3000', // allow requests from frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true, // if using cookies
  });
  await app.listen(process.env.PORT ?? 3333);
}
bootstrap();
