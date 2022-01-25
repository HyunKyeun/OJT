import { IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateUserinfoDTO {
  @IsString()
  readonly userid: string;
  @IsString()
  readonly userpw: string;
  @IsOptional()
  @IsString()
  readonly email: string;
  @IsOptional()
  @IsString()
  readonly name: string;
}
