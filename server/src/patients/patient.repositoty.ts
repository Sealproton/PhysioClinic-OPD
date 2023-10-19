import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import * as pg from 'pg';

@Injectable()
export class PatientRepository {
  private pool;
  constructor() {
    this.pool = new pg.Pool({
      connectionString: `postgresql://postgres:${process.env.DB_PASSWORD}@db.dqidiaesllnjownlicwx.supabase.co:5432/postgres`,
    });
  }
  async findPatient(userID: number, name: string, lname: string) {
    try {
      const patient = await this.pool.query(
        'SELECT * FROM patients WHERE user_id = $1 AND name = $2 AND lname = $3',
        [userID, name, lname],
      );
      return patient.rows[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  async createPatient(data: CreatePatientDto) {
    try {
      const createPatient = await this.pool.query(
        'INSERT INTO patients (hn,name,lname,age,ud,address,tel,height,weight,smoke,alcohol,user_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *',
        [
          data.HN,
          data.name,
          data.lname,
          data.age,
          data.UD,
          data.address,
          data.tel,
          data.height,
          data.weight,
          data.smoke,
          data.alcohol,
          data.userID,
        ],
      );
      return createPatient.rows[0];
    } catch (error) {
      throw new Error(error);
    }
  }
}
