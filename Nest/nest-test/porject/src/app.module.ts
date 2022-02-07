import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserinfoModule } from './userinfo/userinfo.module';
import { FoundModule } from './found/found.module';
import { LoginModule } from './login/login.module';
import { DeleteModule } from './delete/delete.module';
import { MongoModule } from './mongo/mongo.module';

// 모듈로  userinfo 모듈을 이용함니다
@Module({
  imports: [UserinfoModule, FoundModule, LoginModule, DeleteModule, MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
