import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UpdateUserinfoDTO } from './dto/update-userinfo.dto';
import { CreateUserinfoDTO } from './dto/create-userinfo.dto';
import { UserinfoService } from './userinfo.service';
import { Info } from './entities/userinfo.entity';
@Controller('userinfo')
export class UserinfoController {
  constructor(readonly userinfoService: UserinfoService) {}

  // 저장된 모든 정보 가져오는데 사용할것
  @Get()
  getAll(): Info[] {
    return this.userinfoService.getAll();
  }
  // userid를 이용한 get api를 불러올시 사용
  // ex ) /find/{id}, /find/{name} 처럼. 같은 주소로 다른것을 Get하여 쓰지 않는다.
  // 쓰고싶으면 새로운 컨트롤러.. 뭐 등등 만들어서 씁시다
  @Get(':id')
  getOne(@Param('id') ID: string): Info {
    return this.userinfoService.getOne(ID);
  }

  // create할때 쓸 것 userinfoDTO를 따라 알맞게 쓸것

  @Post()
  create(@Body() Userinfo: CreateUserinfoDTO) {
    console.log('posted');
    return this.userinfoService.create(Userinfo);
  }
  // 지우기
  @Delete(':id')
  remove(@Param('id') ID: string) {
    console.log('deleted');
    return this.userinfoService.deleteOne(ID);
  }
  // 일부분 수정하기
  @Patch(':id')
  patch(@Param('id') ID: string, @Body() UpdateData: UpdateUserinfoDTO) {
    console.log('patched');
    return this.userinfoService.update(ID, UpdateData);
  }
}
