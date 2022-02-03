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
@Controller('delete')
export class DeleteController {
  constructor(readonly deleteservice: DeleteService) {}

  @Post(':id')
  remove(@Param('id') ID: string, @Body() deleteData) {
    console.log('deleted');
    return this.deleteservice.deleteOne(ID, deleteData);
  }
}
