// import { Client } from "pg";
import pg from "pg";

const { Client } = pg;

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "school",
  user: "postgres",
  password: "196976",
});

client.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database");
  }
});

export default client;
