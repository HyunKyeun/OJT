import { MongoModule } from './../mongo/mongo.module';
import { Module } from '@nestjs/common';
import { DeleteService } from './delete.service';
import { DeleteController } from './delete.controller';

@Module({
  imports: [MongoModule],
  providers: [DeleteService],
  controllers: [DeleteController],
})
export class DeleteModule {}
