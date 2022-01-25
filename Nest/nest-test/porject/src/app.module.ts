import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserinfoService } from './userinfo/userinfo.service';
import { UserinfoModule } from './userinfo/userinfo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserinfoModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
