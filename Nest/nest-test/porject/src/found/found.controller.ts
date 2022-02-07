import { Info } from './../entities/userinfo.entity';
import { UpdateUserinfoDTO } from './../dto/update-userinfo.dto';

import { FoundService } from './found.service';
import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('found')
@ApiTags('found')
export class FoundController {
  constructor(readonly foundservice: FoundService) {}

  @Get(':name')
  @ApiOperation({
    summary: '아이디 찾기',
    description: 'name으로 ID 찾기',
  })
  @ApiBody({
    description: '',
  })
  getOne(@Param('name') name: string) {
    // console.log('find name');
    return this.foundservice.findname(name);
  }

  @Patch(':id')
  @ApiOperation({
    summary: '패스워드 수정...인데.. 안?씀',
    description: '패스워드 새로 입력시 변경',
  })
  @ApiBody({
    description: '',
  })
  patch(@Param('id') ID: string, @Body() Updatepw: UpdateUserinfoDTO) {
    // console.log('patched pw');
    return this.foundservice.updatepw(ID, Updatepw);
  }
}
