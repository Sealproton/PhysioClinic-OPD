import { Injectable } from '@nestjs/common';
import * as pg from 'pg';
import { CreateTreatmentDto } from './dtos/create-treatment.dto';
@Injectable()
export class TreatmentsRepository {
  private pool;
  constructor() {
    this.pool = new pg.Pool({
      connectionString: `postgresql://postgres:${process.env.DB_PASSWORD}@db.dqidiaesllnjownlicwx.supabase.co:5432/postgres`,
    });
  }
  async createTreatment(pt_id: number, data: CreateTreatmentDto) {
    console.log(pt_id);
    console.log(data);
    try {
      const createTreatment = await this.pool.query(
        'INSERT INTO treatments (pt_id , bp, hr,cc,pi,pe,ph,tx,result,tx_name) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
        [
          pt_id,
          data.bp,
          data.hr,
          data.cc,
          data.pi,
          data.pe,
          data.ph,
          data.tx,
          data.result,
          data.tx_name,
        ],
      );
      return createTreatment;
    } catch (error) {
      throw new Error(error);
    }
  }
}
