import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { PatientRepository } from './patient.repositoty';

@Module({
  controllers: [PatientsController],
  providers: [PatientsService, PatientRepository],
})
export class PatientsModule {}
