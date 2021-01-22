import { QueryResult } from 'pg';
import { getConnection } from '../configs/db/managers/connectionMannager';

/**
 * Get all the users.
 **/
export async function getAll(req, res, next) {
	const response: QueryResult = await getConnection().query(
		'SELECT * FROM users'
    );
	res.json({ body: response.rows });
}
