import { IsString } from 'class-validator';

export class QueryPatientsDto {
  @IsString()
  query: string;
}
