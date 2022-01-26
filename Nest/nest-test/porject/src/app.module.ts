import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserinfoService } from './userinfo/userinfo.service';
import { UserinfoModule } from './userinfo/userinfo.module';
import { MongooseModule } from '@nestjs/mongoose';


// 모듈로  userinfo 모듈을 이용함니다
@Module({
  imports: [UserinfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
