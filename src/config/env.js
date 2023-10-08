import dotenv from "dotenv";

dotenv.config();

export const config = Object.freeze({
  DB_PASSWORD: process.env.DB_PASSWORD,
  PORT: process.env.PORT,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  SENDER_EMAIL: process.env.SENDER_EMAIL,
});
