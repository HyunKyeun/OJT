import { Info } from './../entities/userinfo.entity';
import { UpdateUserinfoDTO } from './../dto/update-userinfo.dto';

import { LoginService } from './login.service';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('login')
export class LoginController {
  constructor(readonly loginservice: LoginService) {}

  @Post(':id')
  getOne(@Param('id') id: string, @Body() useridpw): Info {
    return this.loginservice.getOne(id, useridpw);
  }

  @Patch(':id')
  patch(@Param('id') ID: string, @Body() UpdateData) {
    console.log('patched');
    return this.loginservice.update(ID, UpdateData);
  }
}
