import { Info } from './../entities/userinfo.entity';
import { UpdateUserinfoDTO } from './../dto/update-userinfo.dto';

import { LoginService } from './login.service';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('login')
@ApiTags('login')
export class LoginController {
  constructor(readonly loginservice: LoginService) {}

  @Post(':id')
  @ApiOperation({
    summary: '로그인',
    description: 'id, pw로 정보 확인',
  })
  @ApiBody({
    description: '',
  })
  getOne(@Param('id') id: string, @Body() useridpw): Info {
    return this.loginservice.getOne(id, useridpw);
  }

  @Patch(':id')
  @ApiOperation({
    summary: '개인정보 수정',
    description: 'id, pw을 이용하여 email, name 수정',
  })
  @ApiBody({
    description: '',
  })
  patch(@Param('id') ID: string, @Body() UpdateData) {
    console.log('patched');
    return this.loginservice.update(ID, UpdateData);
  }
}
