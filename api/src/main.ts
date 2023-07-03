import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RouteLoggerMiddleware } from './middlewares/route-logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(RouteLoggerMiddleware);

  await app.listen(3000);
}

bootstrap();
