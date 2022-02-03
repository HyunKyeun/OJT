import {
  HttpException,
  HttpStatus,
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
  // 전부 방출
  // custom error 로 테스트확인
  getOne(id: string, useridpw): Info {
    console.log(useridpw.userid);
    console.log(useridpw.userpw);
    const userinfo = UserinfoService.userinfos.find(
      (userinfo) => userinfo.userid === id,
    );
    if (!userinfo) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `There are no user ID : ${id}`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    if (
      userinfo.userid !== useridpw.userid ||
      userinfo.userpw !== useridpw.userpw
    ) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: "Your PW isn't correct",
        },
        HttpStatus.FORBIDDEN,
      );
    }
    return userinfo;
  }
  update(id: string, updateData) {
    console.log(updateData);
    const userinfo = UserinfoService.userinfos.find(
      (userinfo) => userinfo.userid === id,
    );
    if (!userinfo) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `There are no user ID : ${id}`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    if (updateData.userpw !== userinfo.userpw) {
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
    console.log(newinfo);

    UserinfoService.userinfos = UserinfoService.userinfos.filter(
      (userinfo) => userinfo.userid !== id,
    );
    UserinfoService.userinfos.push({ ...userinfo, ...newinfo });
  }
}
