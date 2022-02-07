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
import { Info } from '../entities/userinfo.entity';

@Injectable()
export class UserinfoService {
  static getOne: any;
  static deleteOne: any;
  static userinfos: Info[] = [];

  constructor(
    @Inject('Userinfo')
    private client,
  ) {}

  // 전부 방출
  async getAll() {
    const info = await this.client
      .db('Userinfo')
      .collection('info')
      .find()
      .toArray();
    // console.log(info);
    return info;
  }
  // 아이디 조건에 맞는 가장 최상위 정보 보내기 (같은 ID가있어도, 만들어진 순서.. key값이 낮은것 출력)
  // getOne(id: string): Info {
  //   const userinfo = UserinfoService.userinfos.find((userinfo) => userinfo.userid === id);
  //   if (!userinfo) {
  //     throw new NotFoundException(`Userinfo with ID : ${id} not found`);
  //   }
  //   return userinfo;
  // }

  // custom error 로 테스트확인
  async getOne(id: string) {
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
    return info;
  }
  // getOnebyname(name: string): Info {
  //   const userinfo = UserinfoService.userinfos.find(
  //     (userinfo) => userinfo.name === name,
  //   );
  //   if (!userinfo) {
  //     throw new NotFoundException(`Userinfo with ${name} not found`);
  //   }
  //   return userinfo;
  // }

  // 같은 아이디가 아닌것들을 필터해서 다시 유저info 만들..?
  // deleteOne(id: string, deleteData) {
  // console.log(deleteData);
  //   const userinfo = UserinfoService.userinfos.find(
  //     (userinfo) => userinfo.userid === id,
  //   );
  // if (!userinfo) {
  //   throw new HttpException(
  //     {
  //       status: HttpStatus.NOT_FOUND,
  //       error: `There are no user ID : ${id}`,
  //     },
  //     HttpStatus.NOT_FOUND,
  //   );
  // }
  //   UserinfoService.userinfos = UserinfoService.userinfos.filter(
  //     (userinfo) => userinfo.userid !== id,
  //   );
  // }
  // 생성 + key 값 하나씩 추가
  async create(userinfodata) {
    await this.client.db('Userinfo').collection('info').insertOne(userinfodata);
    // console.log(userinfodata);
  }
  //  지우고 새로운 데이터 넣어서 저장
  async update(id: string, updateData) {
    if (updateData.userpw1 !== updateData.userpw2) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'two pw are different',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    const newpw = { userpw: `${updateData.userpw1}` };
    const info = await this.client
      .db('Userinfo')
      .collection('info')
      .update({ userid: `${id}` }, { $set: newpw });
    if (!info) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `There are no user ID : ${id}`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    // console.log(info);
  }
}
