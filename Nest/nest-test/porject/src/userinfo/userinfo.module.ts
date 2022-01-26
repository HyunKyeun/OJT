import { Module } from '@nestjs/common';
import { UserinfoController } from './userinfo.controller';
import { UserinfoService } from './userinfo.service';

// 컨트롤러, 서비스는 이렇게 사용함니다
@Module({
  controllers: [UserinfoController],
  providers: [UserinfoService],
})
export class UserinfoModule {}
