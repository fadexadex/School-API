import dotenv from "dotenv";

dotenv.config();

export const config = Object.freeze({
  dbPassword: process.env.PASSWORD,
  port: process.env.PORT,
});
