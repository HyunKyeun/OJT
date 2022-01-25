import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserinfoDTO } from './dto/create-userinfo.dto';
import { UpdateUserinfoDTO } from './dto/update-userinfo.dto';
import { Info } from './entities/userinfo.entity';

@Injectable()
export class UserinfoService {
  private userinfos: Info[] = [];

  getAll(): Info[] {
    return this.userinfos;
  }

  getOne(id: string): Info {
    const userinfo = this.userinfos.find((userinfo) => userinfo.userid === id);
    if (!userinfo) {
      throw new NotFoundException(`Userinfo with ID : ${id} not found`);
    }
    return userinfo;
  }
  // getOnebyname(name: string): Info {
  //   const userinfo = this.userinfos.find((userinfo) => userinfo.name === name);
  //   if (!userinfo) {
  //     throw new NotFoundException(`Userinfo with name : ${name} not found`);
  //   }
  //   return userinfo;
  // }

  deleteOne(id: string) {
    this.getOne(id);
    this.userinfos = this.userinfos.filter(
      (userinfo) => userinfo.userid !== id,
    );
  }

  create(userinfodata: CreateUserinfoDTO) {
    this.userinfos.push({
      key: this.userinfos.length + 1,
      ...userinfodata,
    });
  }

  update(id: string, updateData: UpdateUserinfoDTO) {
    const userinfo = this.getOne(id);
    this.deleteOne(id);
    this.userinfos.push({ ...userinfo, ...updateData });
  }
}
