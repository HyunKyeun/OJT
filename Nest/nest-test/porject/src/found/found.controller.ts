import { Info } from './../entities/userinfo.entity';
import { UpdateUserinfoDTO } from './../dto/update-userinfo.dto';

import { FoundService } from './found.service';
import { Body, Controller, Get, Param, Patch } from '@nestjs/common';

@Controller('found')
export class FoundController {
  constructor(readonly foundservice: FoundService) {}

  @Get(':name')
  getOne(@Param('name') name: string): Info {
    console.log('find name');
    return this.foundservice.findname(name);
  }

  @Patch(':id')
  patch(@Param('id') ID: string, @Body() Updatepw: UpdateUserinfoDTO) {
    console.log('patched pw');
    return this.foundservice.updatepw(ID, Updatepw);
  }
}
