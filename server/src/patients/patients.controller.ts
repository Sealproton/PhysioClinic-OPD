import { Controller, Post, Body, UseGuards, Get, Query } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { CreatePatientDto } from './dto/create-patient.dto';
import { QueryPatientsDto } from './dto/query-patients.dto';
import { CurrentUser } from 'src/user/decorator/currentUser.decorator';
@Controller('patients')
@UseGuards(AuthGuard)
export class PatientsController {
  constructor(private ptService: PatientsService) {}
  @Get('/')
  getPatient(
    @CurrentUser() userID: string,
    @Query() { query }: QueryPatientsDto,
  ) {
    const result = this.ptService.getPatients(Number(userID), query);
    return result;
  }
  @Post('/create')
  createPatient(@CurrentUser() userID: string, @Body() body: CreatePatientDto) {
    const result = this.ptService.createPatient(Number(userID), body);
    return result;
  }
}
