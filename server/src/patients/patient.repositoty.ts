import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import * as pg from 'pg';

@Injectable()
export class PatientRepository {
  private pool;
  constructor() {
    this.pool = new pg.Pool({
      connectionString: `postgresql://postgres:${process.env.DB_PASSWORD}@db.dqidiaesllnjownlicwx.supabase.co:5432/postgres`,
    });
  }
  async findPatient(userID: number, ptFindPatameter: any) {
    const { name, lname, pt_id } = ptFindPatameter;
    try {
      if (pt_id) {
        const patient = await this.pool.query(
          'SELECT * FROM patients WHERE pt_id = $1',
          [pt_id],
        );
        return patient.rows[0];
      } else {
        const patient = await this.pool.query(
          'SELECT * FROM patients WHERE user_id = $1 AND name = $2 AND lname = $3',
          [userID, name, lname],
        );
        return patient.rows[0];
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  async findAllPatients(userID: number, queryandpage: string) {
    const [queryParameters, page] = queryandpage.split('/');
    const offset = (Number(page) - 1) * 10;
    const queryParams: (number | string)[] = [userID];
    const queryParts = [`SELECT * FROM patients WHERE user_id = $1`];
    if (queryParameters) {
      queryParams.push(queryParameters);
      queryParts.push(
        'AND (UPPER(name) ~ UPPER($2) OR UPPER(lname) ~ UPPER($2) OR UPPER(hn) ~ UPPER($2) OR tel ~ $2)',
      );
    }
    queryParts.push(`ORDER BY created_at ASC LIMIT 10 OFFSET ${offset}`);
    const queryString = queryParts.join(' ');
    try {
      const quertPatients = await this.pool.query(queryString, queryParams);
      const allPatient = await this.pool.query(
        'SELECT * FROM patients WHERE user_id = $1',
        [userID],
      );
      return {
        data: quertPatients.rows,
        count: allPatient.rows.length,
        allPatient: allPatient.rows,
      };
    } catch (error) {
      throw new Error(error);
    }
  }
  async createPatient(userID: number, data: CreatePatientDto) {
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
          userID,
        ],
      );
      return createPatient.rows[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  async deletePatient(pt_id: number) {
    try {
      const deletePt = await this.pool.query(
        'DELETE FROM patients WHERE pt_id = $1',
        [pt_id],
      );
      return deletePt;
    } catch (error) {
      throw new Error(error);
    }
  }
  async updataPatient(pt_id: number, data: UpdatePatientDto) {
    const {
      name,
      lname,
      age,
      UD,
      address,
      tel,
      height,
      weight,
      smoke,
      alcohol,
    } = data;
    try {
      const updataPatientPt = await this.pool.query(
        'UPDATE patients SET name = $2, lname = $3, age = $4, ud = $5, address = $6, tel = $7, height = $8, weight = $9, smoke = $10, alcohol = $11 WHERE pt_id = $1',
        [
          pt_id,
          name,
          lname,
          age,
          UD,
          address,
          tel,
          height,
          weight,
          smoke,
          alcohol,
        ],
      );
      return updataPatientPt;
    } catch (error) {
      throw new Error(error);
    }
  }
}
