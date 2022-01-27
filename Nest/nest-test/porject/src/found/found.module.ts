import { Module } from '@nestjs/common';
import { FoundController } from './found.controller';
import { FoundService } from './found.service';

@Module({
  controllers: [FoundController],
  providers: [FoundService]
})
export class FoundModule {}
