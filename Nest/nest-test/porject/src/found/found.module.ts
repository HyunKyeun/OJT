import { MongoModule } from './../mongo/mongo.module';
import { Module } from '@nestjs/common';
import { FoundController } from './found.controller';
import { FoundService } from './found.service';

@Module({
  imports: [MongoModule],
  controllers: [FoundController],
  providers: [FoundService],
})
export class FoundModule {}
