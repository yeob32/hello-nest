import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/all-exception.filter';
import { ConfigurationModule } from './config/configurationModule.config';
import { SwaggerConfig } from './config/swagger/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  // const app = await NestFactory.create(AppModule);

  // app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 요청에 대한 유효성 검사 실행
      forbidNonWhitelisted: true, // 허용되지 않은 request property 요청 시 에러 발생
      transform: true, // :id => url 형태라 문자열로 받아하지만 해당 옵션 사용 시 number 또는 원하는 타입으로 변환해줌
    }),
  );

  const configModule = new ConfigurationModule(app);
  configModule.addConfig(new SwaggerConfig());
  configModule.setup();

  await app.listen(3000, '0.0.0.0');
}

bootstrap();
