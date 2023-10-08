//Database Interactions
import client from "../config/db.js";
import { hashPassword, passwordMatches } from "../utils/hash.js";
import { generateToken } from "../utils/jwt.js";
import { sendMail } from "../utils/mail.sender.js";
import { config } from "../config/env.js";
import { registerSchema } from "../validation/register_schema.js";
import { loginSchema } from "../validation/register_schema.js";
import { resetSchema } from "../validation/register_schema.js";

//Function to check if username already exists in database
export async function checkIfUserExists(username, role) {
  const query = `
    SELECT COUNT(*) as count
    FROM ${role}
    WHERE username = $1
  `;
  const values = [username];
  const result = await client.query(query, values);
  return +result.rows[0].count;
}

//Function to register new users
export async function register(payload) {
  const { error, value } = registerSchema.validate(payload);
  if (error) {
    return false;
  }

  const { username, password, role } = value;

  try {
    const userExists = await checkIfUserExists(username, role);
    if (userExists) {
      console.log("I exist");
      return false;
    } else {
      const hashedPassword = await hashPassword(password);
      const query = `
            INSERT INTO ${role} (username, password)
            VALUES($1, $2)
            RETURNING *
            `;
      const values = [username, hashedPassword];
      const result = await client.query(query, values);
      console.log(result.rows);
      return result.rows;
    }
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

//Function to log existing users
export async function login(payload) {
  const { error, value } = loginSchema.validate(payload);
  if (error) {
    return false;
  }

  const { username, password, role } = value;
  try {
    const userExists = await checkIfUserExists(username, role);
    if (!userExists) {
      return false;
    } else {
      // const hashedPassword = await hashPassword(password);
      const query = `
            SELECT password
            FROM ${role}
            WHERE username = $1 
            `;
      const values = [username];
      const result = await client.query(query, values);
      const user = result.rows[0];
      const isMatch = await passwordMatches(password, user.password);
      console.log(isMatch);
      if (!isMatch) {
        return false;
      } else {
        const token = await generateToken(user);
        return token;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
}

export const sendResetLink = async (payload) => {
  const { error, value } = resetSchema.validate(payload);
  if (error) {
    return false;
  }

  const { username, role } = value;

  const userExists = await checkIfUserExists(username, role);

  if (!userExists) {
    return false;
  } else {
    try {
      const response = sendMail(username, config.SENDER_EMAIL);
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
};

export async function reset(payload) {
  const { username, role, new_password } = payload;

  const userExists = await checkIfUserExists(username, role);

  if (!userExists) {
    return false;
  } else {
    try {
      const query = `
              UPDATE ${role}
              SET password = $1
              WHERE username = $2 
              RETURNING *
              `;
      const values = [new_password, username];
      const result = await client.query(query, values);
      return result.rows;
    } catch (err) {
      console.error(err.message);
      throw err;
    }
  }
}

// const payload = {
//   username: "doper",
//   role: "admin",
//   current_password: "jjk",
//   new_password: "jojo-siwa",
// };

// const payloader = {
//   username: "joladeola",
//   password: "jade1543",
//   role: "teacher",
// };

// register(payloader);
// reset(payload);
