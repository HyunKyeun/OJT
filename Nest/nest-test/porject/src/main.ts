import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 다른 주소의 페이지에서 요청 들어왔을때 허용, 거절 하는데 쓰는 보안 Cors 근데 암것도 안건드렸는데 됨
  app.enableCors();
  // Pipe
  //post 할때 스키마에 맞게 알맞은 정보가 들어왔는가?
  // whitelist 설정한 모든 요소가 다 들이었으면 ㅇㅋ
  // forbidnon ~~ 그외의 요소가 들어오면 차단
  // transform string -> number로 바꿔주는 요소

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  // /api 초기설정
  const config = new DocumentBuilder()
    .setTitle('API test!')
    .setDescription('단순기능 test')
    .setVersion('0.1')
    .addTag('userifo')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(10001);
}
bootstrap();
