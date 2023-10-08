// import { config } from "../config/env.js";
// import jwt from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.js";

export const authUser = (req, res, next) => {
  // const token = req.cookies.token;
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "UNAUTHORIZED" });
  } else {
    try {
      const decoded = verifyToken(token);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(403).json({ message: "INVALID TOKEN" });
      // next(error)
    }
  }
};
