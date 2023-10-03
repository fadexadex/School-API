import express from "express";
const adminRoute = express.Router();

import { dropAStudent } from "../controllers/admin";
import { createACourse } from "../controllers/admin";
import { deleteACourse } from "../controllers/admin";
import { getTheAdmins } from "../controllers/admin";
import { getTheTeachers } from "../controllers/admin";

adminRoute.delete("/delete-student", dropAStudent);
adminRoute.post("/create-course", createACourse);
adminRoute.delete("/delete-course", deleteACourse);
adminRoute.get("/get-admins", getTheAdmins);
adminRoute.get("/get-teachers", getTheTeachers);

export default adminRoute;
