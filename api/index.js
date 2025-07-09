import express from "express";
import cors from "cors";
import { Client } from "pg";
import bodyParser from "body-parser";
import morgan from "morgan";

const connection = new Client({
  user: "postgres",
  host: "localhost",
  database: "Fullstack",
  password: "SaNNa",
  port: 5432,
})

connection.connect();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan("tiny"))
app.use(express.json())

app.post("/posts", (req, res) => {
  console.log(req.body)
  const username = req.body.username
  const postName = req.body.postName
  const postContent = req.body.postContent
  connection.query(`INSERT INTO posts(username, postname, postcontent) VALUES ('${username}', '${postName}', '${postContent}')`, (err, res) => {
    if (err) {
      console.error(err.stack);
      res.status(500).send("Server error");
    } else {
      console.log("Data inserted");
    }
  })
  res.status(201)
})

app.get("/posts", (req, res) => {
  connection.query("SELECT * FROM posts", (err, database_res) => {
    if (err) {
      console.error(err.stack);
      res.status(500).send("Server error");
    } else {
      console.log(database_res.rows)
      res.json(database_res.rows)
    }
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

