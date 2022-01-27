import { IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateUserinfoDTO {
  @IsString()
  readonly userid: string;
  @IsString()
  readonly userpw: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly name: string;
}
