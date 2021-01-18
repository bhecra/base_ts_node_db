import { Router } from 'express';
import { QueryResult } from 'pg';
import { PgConnection } from '../configs/db/connections/pg.connection';

const router = Router();

router.get('/test', async (req, res) => {

    const pool:PgConnection = new PgConnection();

    const response: QueryResult = await pool.pool.query('SELECT * FROM users');
    console.log(response.rows);
    res.status(200).json(response.rows);
    
});

export default router;
