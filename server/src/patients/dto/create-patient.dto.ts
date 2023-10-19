import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreatePatientDto {
  @IsNumber()
  userID: number;
  @IsString()
  HN: string;
  @IsString()
  name: string;
  @IsString()
  lname: string;
  @IsNumber()
  age: number;
  @IsString()
  UD: string;
  @IsString()
  address: string;
  @IsString()
  tel: string;
  @IsNumber()
  height: number;
  @IsNumber()
  weight: number;
  @IsBoolean()
  smoke: boolean;
  @IsBoolean()
  alcohol: boolean;
}
