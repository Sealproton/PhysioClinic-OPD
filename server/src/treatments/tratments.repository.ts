import { Injectable } from '@nestjs/common';
import * as pg from 'pg';

@Injectable()
export class PatientRepository {
  private pool;
  constructor() {
    this.pool = new pg.Pool({
      connectionString: `postgresql://postgres:${process.env.DB_PASSWORD}@db.dqidiaesllnjownlicwx.supabase.co:5432/postgres`,
    });
  }
}
