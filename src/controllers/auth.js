import { register } from "../models/auth.js";
import { login } from "../models/auth.js";
import { reset } from "../models/auth.js";
import { sendResetLink } from "../models/auth.js";

export async function registerPerson(req, res) {
  try {
    const data = await register(req.body);
    if (!data) {
      res.status(400).json("USERNAME EXISTS OR INVALID REQUEST");
    } else {
      res.status(201).json({ message: "REGISTRATION SUCESSFULL", data });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function logPerson(req, res) {
  try {
    const data = await login(req.body);
    if (data) {
      res.cookie("token", data, { httpOnly: true });
      res.status(200).json({ message: "LOGIN SUCCESSFUL", data });
    } else {
      res
        .status(403)
        .json({ message: "INVALID USERNAME OR PASSWORD OR INVALID REQUEST" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function sendARequestlink(req, res) {
  const data = await sendResetLink(req.body);
  if (data === false) {
    res.status(400).json({
      message: "INVALID USERNAME",
      response: data,
    });
  } else {
    res.status(200).json({
      message: "PASSWORD SENT SUCCESSFULLY",
      response: data,
    });
  }
}

export async function resetPassword(req, res) {
  try {
    const data = await reset(req.body);
    if (data) {
      res.json({ message: "PASSWORD SUCCESSFULLY RESET", data });
    } else {
      res.json({ message: "INVALID USERNAME OR PASSWORD" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function logOut() {
  try {
    reset.ClearCookie("token");
    res.json("LOGGED OUT SUCCESSFULLY");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
