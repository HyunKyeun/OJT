import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UpdateUserinfoDTO } from '../dto/update-userinfo.dto';
import { CreateUserinfoDTO } from '../dto/create-userinfo.dto';
import { UserinfoService } from './userinfo.service';
import { Info } from '../entities/userinfo.entity';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
@Controller('userinfo')
@ApiTags('userinfo')
export class UserinfoController {
  constructor(readonly userinfoService: UserinfoService) {}

  // 저장된 모든 정보 가져오는데 사용할것
  @Get()
  @ApiOperation({
    summary: '전부 받아오기 (쓰진 않음)',
    description: 'nest에 저장된 임시 데이터 전부 불러올..기능',
  })
  @ApiBody({
    description: '',
  })
  getAll(): Info[] {
    return this.userinfoService.getAll();
  }
  // userid를 이용한 get api를 불러올시 사용
  // ex ) /find/{id}, /find/{name} 처럼. 같은 주소로 다른것을 Get하여 쓰지 않는다.
  // 쓰고싶으면 새로운 컨트롤러.. 뭐 등등 만들어서 씁시다
  @Get(':id')
  @ApiOperation({
    summary: '해당 id 를 이용하여 정보 받아오기',
    description: 'nest에 저장된 데이터중 하나를 받아올 기능',
  })
  @ApiBody({
    description: '',
  })
  getOne(@Param('id') ID: string): Info {
    return this.userinfoService.getOne(ID);
  }

  // create할때 쓸 것 userinfoDTO를 따라 알맞게 쓸것

  @Post()
  @ApiOperation({
    summary: '회원 가입',
    description: ' 4가지 입력',
  })
  @ApiBody({
    description: '',
  })
  create(@Body() Userinfo: CreateUserinfoDTO) {
    console.log('posted');
    return this.userinfoService.create(Userinfo);
  }
  // 지우기
  // @Delete(':id')
  // remove(@Param('id') ID: string, @Body() deleteData) {
  //   console.log('deleted');
  //   return this.userinfoService.deleteOne(ID, deleteData);
  // }
  // 일부분 수정하기
  @Patch(':id')
  @ApiOperation({
    summary: '비밀번호 수정',
    description: '해당 id의 pw1, pw2 확인후 새로 저장',
  })
  @ApiBody({
    description: '',
  })
  patch(@Param('id') ID: string, @Body() UpdateData) {
    console.log('patched');
    return this.userinfoService.update(ID, UpdateData);
  }
}
