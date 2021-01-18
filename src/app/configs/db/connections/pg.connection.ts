import { Pool } from 'pg';
import { DataBaseConnection } from '../interfaces/connection.interface';

export class PgConnection implements DataBaseConnection {

    public pool = new Pool({
        user: 'postgres',
        host: '127.0.0.1',
        password: '357159js',
        database: 'typescriptdb',
        port: 5432
    });

    connectToDataBase(): Promise<any> {
        return this.pool.connect();
    }
    
}
