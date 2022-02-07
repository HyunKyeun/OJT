import { MongoModule } from './../mongo/mongo.module';
import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports: [MongoModule],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
