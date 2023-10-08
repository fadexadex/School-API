import jwt from "jsonwebtoken";
import { config } from "../config/env.js";

export async function generateToken(payload) {
  const generatedToken = jwt.sign(payload, config.ACCESS_TOKEN, {
    expiresIn: "1h",
  });
  return generatedToken;
}

export async function verifyToken(generatedToken) {
  return jwt.verify(generatedToken, config.ACCESS_TOKEN);
}
