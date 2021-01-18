import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '357159js',
    database: 'typescriptdb',
    port: 5432
})