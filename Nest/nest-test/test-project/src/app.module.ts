import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { MoviesController } from './movies/movies.controller';
import { UserinfoController } from './userinfo/userinfo.controller';
import { UserinfoService } from './userinfo/userinfo.service';

@Module({
  imports: [MoviesModule],
  controllers: [AppController, UserinfoController],
  providers: [UserinfoService],
})
export class AppModule {}
