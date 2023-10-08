import express from "express";
const authRoute = express.Router();

import { registerPerson } from "../controllers/auth.js";
import { logPerson } from "../controllers/auth.js";
import { resetPassword } from "../controllers/auth.js";
import { sendARequestlink } from "../controllers/auth.js";
import { logOut } from "../controllers/auth.js";

authRoute.post("/register", registerPerson);
authRoute.post("/login", logPerson);
authRoute.post("/sendReset-link", sendARequestlink);
authRoute.put("/reset-password", resetPassword);
authRoute.post("/logout", logOut);

export default authRoute;
