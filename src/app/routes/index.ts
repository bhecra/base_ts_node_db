import { Router } from 'express';
import { QueryResult } from 'pg';
import { PgConnection } from '../configs/db/connections/pg.connection';



const router = Router();
const pgDB:PgConnection = new PgConnection();





router.get('/test', async (req, res) => {

    const response: QueryResult = await pgDB.commonDB.query('SELECT * FROM tenants');
    console.log(response.rows);
    res.status(200).json(response.rows);
    
});

export default router;
