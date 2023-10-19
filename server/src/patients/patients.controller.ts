import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { CreatePatientDto } from './dto/create-patient.dto';
@Controller('patients')
@UseGuards(AuthGuard)
export class PatientsController {
  constructor(private ptService: PatientsService) {}
  @Post('/create')
  createPatient(@Body() body: CreatePatientDto) {
    const result = this.ptService.createPatient(body);
    return result;
  }
}
