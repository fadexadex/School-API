import express from "express";
const studentRoute = express.Router();

import { enrollInACourse } from "../controllers/student.js";
import { dropACourse } from "../controllers/student.js";
import { getTheStudentsAcrossCourse } from "../controllers/student.js";
import { getAllTheCourses } from "../controllers/student.js";
import { getTheCoursesEnrolledFor } from "../controllers/student.js";

studentRoute.post("/enroll-in-course", enrollInACourse);
studentRoute.delete("/drop-course", dropACourse);
studentRoute.get("/get-students-across-course", getTheStudentsAcrossCourse);
studentRoute.get("/get-all-the-courses", getAllTheCourses);
studentRoute.get("/get-the-courses-enrolled-for", getTheCoursesEnrolledFor);

export default studentRoute;
