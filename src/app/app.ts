import express, { json } from "express";
import bodyParser from 'body-parser';

const PORT = 8080;


const app = express();
app.set('port', PORT);
app.use(bodyParser.json());

app.get("/", (request, response) => {
  return response.json({ message: "Hello, TypeScript!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});