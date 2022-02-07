import { UserinfoService } from './../userinfo/userinfo.service';
import { Info } from './../entities/userinfo.entity';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class FoundService {
  constructor(
    @Inject('Userinfo')
    private client,
  ) {}

  async updatepw(id: string, updata) {
    if (updata.userpw1 !== updata.userpw2) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'two pw are different',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    const info = await this.client
      .db('Userinfo')
      .collection('info')
      .findOne({ userid: `${id}` });
    // console.log(info);

    return;
  }

  async findname(name: string) {
    const info = await this.client
      .db('Userinfo')
      .collection('info')
      .findOne({ name: `${name}` });
    // console.log(info);
    if (!info) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `There are no user ID with ${name}`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return info;
  }
}
