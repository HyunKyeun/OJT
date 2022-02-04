import { DeleteService } from './delete.service';
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
import { Info } from '../entities/userinfo.entity';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
@Controller('delete')
@ApiTags('delete')
export class DeleteController {
  constructor(readonly deleteservice: DeleteService) {}

  @Post(':id')
  @ApiOperation({
    summary: '지우기',
    description: '정보 삭제 ( delete에 body가 심어지지 않아',
  })
  @ApiBody({
    description: '',
  })
  remove(@Param('id') ID: string, @Body() deleteData) {
    console.log('deleted');
    return this.deleteservice.deleteOne(ID, deleteData);
  }
}
