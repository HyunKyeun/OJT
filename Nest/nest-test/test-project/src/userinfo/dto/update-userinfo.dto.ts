import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateUserinfoDTO } from './create-userinfo.dto';

export class UpdateUserinfoDTO extends PartialType(CreateUserinfoDTO) {}

// export class UpdateMovieDTO{
//  @IsString()
//  readonly title? : string;
//  @IsNumber()
//  readonly year? : number;
//  @IsString({each : true})
//  readonly genres? : string[];
// }
