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

  @Get()
  getAll(): Info[] {
    return this.userinfoService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') ID: string): Info {
    return this.userinfoService.getOne(ID);
  }

  // @Get(':name')
  // getOnebyname(@Param('name') name: string): Info {
  //   return this.userinfoService.getOnebyname(name);
  // }

  @Post()
  create(@Body() Userinfo: CreateUserinfoDTO) {
    console.log('posted');
    return this.userinfoService.create(Userinfo);
  }

  @Delete(':id')
  remove(@Param('id') ID: string) {
    console.log('deleted');
    return this.userinfoService.deleteOne(ID);
  }

  @Patch(':id')
  patch(@Param('id') ID: string, @Body() UpdateData: UpdateUserinfoDTO) {
    console.log('patched');
    return this.userinfoService.update(ID, UpdateData);
  }
}
