import express, { json } from "express";
import bodyParser from 'body-parser';

import idexRoutes from './routes/index';

const PORT = 8080;
const app = express();


// middlewares

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(idexRoutes);
app.set('port', PORT);

app.get("/", (request, response) => {
  return response.json({ message: "Hello, TypeScript!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});