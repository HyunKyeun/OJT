import { UserinfoService } from './../userinfo/userinfo.service';
import { Info } from './../entities/userinfo.entity';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class FoundService {
  private userinfos: Info[] = [];

  updatepw(id: string, updata) {
    const userinfo = UserinfoService.getOne(id);
    UserinfoService.deleteOne(id);
    this.userinfos.push({ ...userinfo, ...updata });
    return;
  }

  findname(name: string): Info {
    const userinfo = this.userinfos.find((userinfo) => userinfo.name === name);
    console.log(userinfo);
    if (!userinfo) {
      throw new NotFoundException(`Userinfo with name : ${name} not found`);
    }
    return userinfo;
  }
}
