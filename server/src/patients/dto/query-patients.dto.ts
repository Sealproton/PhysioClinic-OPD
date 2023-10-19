import { IsString} from 'class-validator';

export class QueryPatientsDto {
  @IsString()
  userID: string;
  @IsString()
  query: string;
}
