import { Module } from '@nestjs/common';
import { TreatmentsService } from './treatments.service';
import { TreatmentsController } from './treatments.controller';
import { PatientsModule } from 'src/patients/patients.module';
import { PatientRepository } from 'src/patients/patient.repositoty';
import { TreatmentsRepository } from './tratments.repository';
@Module({
  imports: [PatientsModule],
  providers: [TreatmentsService, PatientRepository, TreatmentsRepository],
  controllers: [TreatmentsController],
})
export class TreatmentsModule {}
