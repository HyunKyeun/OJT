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
export class LoginService {
  constructor(
    @Inject('Userinfo')
    private client,
  ) {}
  // 전부 방출
  // custom error 로 테스트확인
  async getOne(id: string, useridpw) {
    // console.log(useridpw.userid);
    // console.log(useridpw.userpw);
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

    if (info.userid !== useridpw.userid || info.userpw !== useridpw.userpw) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: "Your PW isn't correct",
        },
        HttpStatus.FORBIDDEN,
      );
    }
    return info;
  }

  async update(id: string, updateData) {
    // console.log(updateData);
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
    if (updateData.userpw !== info.userpw) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'PW is wrong',
        },
        HttpStatus.FORBIDDEN,
      );
    }

    if (
      updateData.userpw === '' ||
      updateData.email === '' ||
      updateData.name === ''
    ) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'You should put all stuffs',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    const newinfo = {
      email: `${updateData.email}`,
      name: `${updateData.name}`,
    };
    // console.log(newinfo);

    await this.client
      .db('Userinfo')
      .collection('info')
      .update({ userid: `${id}` }, { $set: newinfo });
  }
}
