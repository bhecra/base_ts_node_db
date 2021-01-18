import { DatabaseReferences } from '../../../utils/constants';
import { PgConnection } from '../connections/pg.connection';

export class FactoryDatabase {
	public getDatabaseInstance(
		databaseReference: string | undefined
	): PgConnection {
		let instance: any;

		switch (databaseReference) {
			case DatabaseReferences.postgresQL:
				instance = new PgConnection();
				break;
			case DatabaseReferences.mongo:
				//instance = new MongoDBConnection();
				break;
			default:
				//instance = new MySqlConnection();
				break;
		}
		return instance;
	}
}
