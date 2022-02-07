import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { error } from 'console';
import { CreateUserinfoDTO } from '../dto/create-userinfo.dto';
import { UpdateUserinfoDTO } from '../dto/update-userinfo.dto';
import { UserinfoService } from './../userinfo/userinfo.service';
import { Info } from './../entities/userinfo.entity';

@Injectable()
export class DeleteService {
  constructor(
    @Inject('Userinfo')
    private client,
  ) {}

  async deleteOne(id: string, deleteData) {
    // console.log(deleteData);
    const info = await this.client
      .db('Userinfo')
      .collection('info')
      .findOne({ userid: `${id}` });
    // console.log(info);
    if (!info) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `There are no user ID : ${id}`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    if (deleteData.userpw1 !== deleteData.userpw2) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Two pw diffrent',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    if (info.userpw !== deleteData.userpw1) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'PW is wrong',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    await this.client
      .db('Userinfo')
      .collection('info')
      .deleteOne({ userid: `${id}` });
  }
}
