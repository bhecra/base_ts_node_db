import { Pool } from 'pg';
import { DataBaseConnection } from '../interfaces/connection.interface';
require('../../server/server-conf');

export class PgConnection implements DataBaseConnection {

    public commonDB = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST0,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: Number(process.env.DB_PORT)
    });

    connectToDataBase(): Promise<any> {
        return this.commonDB.connect();
    }
    
}
