import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserinfoDTO } from './dto/create-userinfo.dto';
import { UpdateUserinfoDTO } from './dto/update-userinfo.dto';
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

  @Post()
  create(@Body() Userinfo: CreateUserinfoDTO) {
    return this.userinfoService.create(Userinfo);
  }

  @Delete(':id')
  remove(@Param('id') ID: string) {
    return this.userinfoService.deleteOne(ID);
  }

  @Patch(':id')
  patch(@Param('id') ID: string, @Body() UpdateData: UpdateUserinfoDTO) {
    return this.userinfoService.update(ID, UpdateData);
  }
}
