import { Injectable } from '@nestjs/common';
import * as pg from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();
@Injectable()
export class UserRepository {
  private pool;
  constructor() {
    this.pool = new pg.Pool({
      connectionString: `postgresql://postgres:${process.env.DB_PASSWORD}@db.dqidiaesllnjownlicwx.supabase.co:5432/postgres`,
    });
  }
  async createUser(username: string, password: string) {
    try {
      const response = await this.pool.query(
        'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
        [username, password],
      );
      return response.rows[0];
    } catch (error) {
      console.error('Error while creating a user:', error);
      throw new Error('Failed to create a user.');
    }
  }
  async findUser(username: string) {
    try {
      const response = await this.pool.query(
        'SELECT * FROM users where username = $1',
        [username],
      );
      return response.rows[0];
    } catch (error) {
      console.error('Error while creating a user:', error);
      throw new Error('Failed to create a user.');
    }
  }
}
