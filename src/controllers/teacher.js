import { getStudentOfferingACourse } from "../models/teacher";
import { getLecturerInACourse } from "../models/teacher";
import { dropStudentFromCourse } from "../models/teacher";

export async function getTheStudentOfferingACourse(req, res) {
  try {
    const data = await getStudentOfferingACourse(req.body);
    if (data) {
      res
        .status(200)
        .json({ message: "HERE ARE THE STUDENTS OFFERING THE COURSE", data });
    } else if (!data) {
      res.json(`No student with the course code found`);
    } else {
      res.json("YOU ARE NOT ALLOWED TO CARRY OUT THIS ACTION");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getTheLecturerInACourse(req, res) {
  try {
    const data = await getLecturerInACourse(req.body);
    if (data) {
      res
        .status(200)
        .json({ message: "HERE ARE THE LECTURERS TEACHING THIS COURSE", data });
    } else if (!data) {
      res.json(`No teacher with the course code found`);
    } else {
      res.json("YOU ARE NOT ALLOWED TO CARRY OUT THIS ACTION");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function dropAStudentFromCourse(req, res) {
  try {
    const data = await dropStudentFromCourse(req.body);
    if (data) {
      res.status(200).json({ message: "STUDENT DELETED SUCCESSFULLY", data });
    } else if (!data) {
      res.json(`No student with the course code found`);
    } else {
      res.json("YOU ARE NOT ALLOWED TO CARRY OUT THIS ACTION");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
