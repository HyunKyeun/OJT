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
export class DeleteService {
  deleteOne(id: string, deleteData) {
    console.log(deleteData);
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
    if (deleteData.userpw1 !== deleteData.userpw2) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Two pw diffrent',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    if (userinfo.userpw !== deleteData.userpw1) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'PW is wrong',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    UserinfoService.userinfos = UserinfoService.userinfos.filter(
      (userinfo) => userinfo.userid !== id,
    );
  }
}
