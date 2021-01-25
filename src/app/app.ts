import express, { json } from 'express';
import bodyParser from 'body-parser';

import * as userService from './services/users';
import { connectAllDb } from './configs/db/managers/connectionMannager';
import * as connectionResolver from './middlewares/connectionResolver';

require('./configs/server/server-conf');

import idexRoutes from './routes/index';
import { FactoryDatabase } from './configs/db/interfaces/db.factory';

const PORT = process.env.PORT;
const app = express();

const dbReference = process.env.DB;

const factoryDatabase = new FactoryDatabase();
const dbConnection = factoryDatabase.getDatabaseInstance(dbReference);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(idexRoutes);
app.set('port', PORT);

app.get('/', (request, response) => {
	return response.json({ message: 'Hello, TypeScript!' });
});

connectAllDb();
app.use(connectionResolver.resolve);


// API Route for getting users
app.get('/users', userService.getAll);
app.listen(PORT, () => {
	console.log(
		`🚀 Server started on \x1b[34m%s\x1b[0m `,
		`http://localhost:${PORT}`
	);
});
dbConnection
	.connectToDataBase()
	.then((_) => {
		console.log(
			'\x1b[33m%s\x1b[0m: Database correctly \x1b[32m%s\x1b[0m',
			`[db-${dbReference}]`,
			'connected'
		);
	
	})
	.catch((error: any) => {
		throw new Error(error);
	});
