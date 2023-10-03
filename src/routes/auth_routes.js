import express from "express";
const authRoute = express.Router();

import { registerPerson } from "../controllers/auth.js";
import { logPerson } from "../controllers/auth.js";
import { resetPassword } from "../controllers/auth.js";

authRoute.post("/register", registerPerson);
authRoute.post("/login", logPerson);
authRoute.put("/reset-password", resetPassword);

export default authRoute;
