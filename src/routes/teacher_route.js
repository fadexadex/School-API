import express from "express";
const teacherRoute = express.Router();

import { getTheStudentOfferingACourse } from "../controllers/teacher.js";
import { getTheLecturerInACourse } from "../controllers/teacher.js";
import { dropAStudentFromCourse } from "../controllers/teacher.js";

teacherRoute.get("/get-students-offering-course", getTheStudentOfferingACourse);
teacherRoute.get("/get-lecturer-teaching-course", getTheLecturerInACourse);
teacherRoute.delete("/drop-student-from-course", dropAStudentFromCourse);

export default teacherRoute;
