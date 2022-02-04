import { Controller, Get } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DefaultDeserializer } from 'v8';
import { AppService } from './app.service';

@Controller()
@ApiTags('TeST')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'test11',
    description: 'test1',
  })
  @ApiBody({
    description: 'test111',
  })
  // @ApiResponse({
  //   description: 'test2',
  // })
  getHello(): string {
    return this.appService.getHello();
  }
}
