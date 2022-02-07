import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('Userinfo')
    private client,
  ) {}

  // async find() {
  //   const info = await this.client
  //     .db('Userinfo')
  //     .collection('info')
  //     .find()
  //     .toArray();
  //   console.log(info);
  //   return info;
  // }

  getHello(): string {
    return 'Nest working!';
  }
}
