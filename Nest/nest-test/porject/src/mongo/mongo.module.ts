import { Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Module({
  providers: [
    {
      provide: 'Userinfo',
      useFactory: async () => {
        try {
          const client = await MongoClient.connect(
            'mongodb://172.30.1.5:27017',
          );

          return client;
        } catch (e) {
          throw e;
        }
      },
    },
  ],
  exports: ['Userinfo'],
})
export class MongoModule {}
