import { UserinfoService } from './../userinfo/userinfo.service';
import { Info } from './../entities/userinfo.entity';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class FoundService {
  updatepw(id: string, updata) {
    const userinfo = UserinfoService.getOne(id);
    UserinfoService.deleteOne(id);
    UserinfoService.userinfos.push({ ...userinfo, ...updata });
    return;
  }

  findname(name: string): Info {
    const userinfo = UserinfoService.userinfos.find(
      (userinfo) => userinfo.name === name,
    );
    if (!userinfo) {
      throw new NotFoundException(`Userinfo with name : ${name} not found`);
    }
    return userinfo;
  }
}
