import { BadRequestException, Injectable } from '@nestjs/common';
import { PatientRepository } from './patient.repositoty';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
@Injectable()
export class PatientsService {
  constructor(private repo: PatientRepository) {}
  async createPatient(userID: number, body: CreatePatientDto) {
    const foundPt = await this.repo.findPatient(userID, {
      name: body.name,
      lname: body.lname,
    });
    if (foundPt) {
      throw new BadRequestException('pt exist');
    }
    const createPt = await this.repo.createPatient(userID, body);
    return createPt;
  }
  async getPatients(userID: number, query: string) {
    const patients = await this.repo.findAllPatients(userID, query);
    return patients;
  }
  async deletePatient(pt_id: number) {
    const foundPt = await this.repo.findPatient(null, { pt_id });
    if (!foundPt) {
      throw new BadRequestException('pt not found');
    }
    const deletePt = await this.repo.deletePatient(pt_id);
    return deletePt;
  }
  async updatePatient(pt_id: number, body: UpdatePatientDto) {
    const foundPt = await this.repo.findPatient(null, { pt_id });
    if (!foundPt) {
      throw new BadRequestException('pt not found');
    }
    const updatePt = await this.repo.updataPatient(pt_id, body);
    return updatePt;
  }
  async getSinglePatient(pt_id: number) {
    const patient = await this.repo.findPatient(null, { pt_id });
    if (!patient) {
      throw new BadRequestException('pt not found');
    }
    return patient;
  }
}
