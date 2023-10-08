import express from "express";
const adminRoute = express.Router();

import { dropAStudent } from "../controllers/admin.js";
import { createACourse } from "../controllers/admin.js";
import { deleteACourse } from "../controllers/admin.js";
import { getTheAdmins } from "../controllers/admin.js";
import { getTheTeachers } from "../controllers/admin.js";

adminRoute.delete("/delete-student", dropAStudent);
adminRoute.post("/create-course", createACourse);
adminRoute.delete("/delete-course", deleteACourse);
adminRoute.get("/get-admins", getTheAdmins);
adminRoute.get("/get-teachers", getTheTeachers);

export default adminRoute;
