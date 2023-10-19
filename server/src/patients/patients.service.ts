import { BadRequestException, Injectable } from '@nestjs/common';
import { PatientRepository } from './patient.repositoty';
import { CreatePatientDto } from './dto/create-patient.dto';
@Injectable()
export class PatientsService {
  constructor(private repo: PatientRepository) {}
  async createPatient(body: CreatePatientDto) {
    const foundPt = await this.repo.findPatient(body.userID, {
      name: body.name,
      lname: body.lname,
    });
    if (foundPt) {
      throw new BadRequestException('pt exist');
    }
    const createPt = await this.repo.createPatient(body);
    return createPt;
  }
  async getPatients(userID: number, query: string) {
    const patients = await this.repo.findAllPatients(userID, query);
    return patients;
  }
}
