import { IsNumber, IsString } from 'class-validator';

export class CreateTreatmentDto {
  @IsString()
  bp: string;
  @IsNumber()
  hr: number;
  @IsString()
  cc: string;
  @IsString()
  pi: string;
  @IsString()
  ph: string;
  @IsString()
  pe: string;
  @IsString()
  tx: string;
  @IsString()
  result: string;
  @IsString()
  tx_name: string;
}
