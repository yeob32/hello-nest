import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 요청에 대한 유효성 검사 실행
      forbidNonWhitelisted: true, // 허용되지 않은 request property 요청 시 에러 발생
      transform: true, // :id => url 형태라 문자열로 받아하지만 해당 옵션 사용 시 number 또는 원하는 타입으로 변환해줌
    }),
  );

  await app.listen(3000);
}
bootstrap();
