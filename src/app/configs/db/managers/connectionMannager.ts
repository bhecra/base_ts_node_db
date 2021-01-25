import { Pool, QueryResult, PoolConfig } from 'pg';
import { PgConnection } from '../connections/pg.connection';
import { getNamespace } from 'continuation-local-storage';

const pgConecction: PgConnection = new PgConnection();

let connectionMap: any;

export async function connectAllDb() {
	let tenants = [];

	const response: QueryResult = await pgConecction.commonDB.query(
		'SELECT * FROM tenants'
	);

	tenants = response.rows;


	connectionMap = tenants
		.map((tenant) => {
			return {
				[tenant.slug]: createConnectionConfig(tenant),
			};
		})
		.reduce((prev, next) => {
			return Object.assign({}, prev, next);
		}, {});
}

function createConnectionConfig(tenant: any) {
	const config: PoolConfig = {
		host: tenant.db_host,
		port: tenant.db_port,
		user: tenant.db_username,
		database: tenant.db_name,
		password: tenant.db_password,
	};

	return new Pool(config);
}

export function getConnectionBySlug(slug: any) {
	if (connectionMap) {
		return connectionMap[slug];
	}
}

/**
 *  Get the connection information (knex instance) for current context.
 **/
export function getConnection() {
	const nameSpace = getNamespace('unique context');
	const conn = nameSpace.get('connection');

	if (!conn) {
		throw 'Connection is not set for any tenant database.';
	}

	return conn;
}
