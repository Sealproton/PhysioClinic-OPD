import { BadRequestException, Injectable } from '@nestjs/common';
import { TreatmentsRepository } from './tratments.repository';
import { CreateTreatmentDto } from './dtos/create-treatment.dto';
import { PatientRepository } from 'src/patients/patient.repositoty';

@Injectable()
export class TreatmentsService {
  constructor(
    private txrepo: TreatmentsRepository,
    private ptrepo: PatientRepository,
  ) {}
  async createTx(pt_id: number, body: CreateTreatmentDto) {
    const ptExisted = await this.ptrepo.findPatient(null, { pt_id });
    if (!ptExisted) {
      throw new BadRequestException('patient not found');
    }
    const createTx = await this.txrepo.createTreatment(pt_id, body);
    return createTx;
  }
}
