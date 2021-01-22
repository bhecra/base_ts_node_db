import { Pool } from 'pg';
import { DataBaseConnection } from '../interfaces/connection.interface';

export class PgConnection implements DataBaseConnection {

    public commonDB = new Pool({
        user: 'postgres',
        host: '127.0.0.1',
        password: '357159js',
        database: 'common_db',
        port: 5432
    });


    connectToDataBase(): Promise<any> {
        return this.commonDB.connect();
    }
    
}
