import express from "express";
import cors from "cors";
import { Client } from "pg";
 
const connection = new Client({
  user: "postgres",
  host: "localhost",
  database: "FullStackDB",
  password: "Pasha_superuser",
  port: 5432,
});
 
connection.connect();

const app = express();
const port = 3000;

app.use(cors());

app.get("/example", (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});