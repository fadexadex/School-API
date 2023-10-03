import express from "express";
const teacherRoute = express.Router();

import { getTheStudentOfferingACourse } from "../controllers/teacher";
import { getTheLecturerInACourse } from "../controllers/teacher";
import { dropAStudentFromCourse } from "../controllers/teacher";

teacherRoute.get("/get-students-offering-course", getTheStudentOfferingACourse);
teacherRoute.get("/get-lecturer-teaching-course", getTheLecturerInACourse);
teacherRoute.delete("/drop-student-from-course", dropAStudentFromCourse);

export default teacherRoute;
