import { enrollInCourse } from "../models/student";
import { dropCourse } from "../models/student";
import { getStudentsAcrossCourse } from "../models/student";
import { getAllCourses } from "../models/student";
import { getCoursesEnrolledFor } from "../models/student";

export async function enrollInACourse(req, res) {
  try {
    const data = await enrollInCourse(req.body);
    if (data) {
      res.status(200).json({ message: "COURSE REGISTERED SUCCESSFULLY", data });
    } else if (!data) {
      res.json(`No course with the code found`);
    } else {
      res.json("YOU ARE NOT ALLOWED TO CARRY OUT THIS ACTION");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function dropACourse(req, res) {
  try {
    const data = await dropCourse(req.body);
    if (data) {
      res.status(200).json({ message: "COURSE DROPPED SUCCESSFULLY", data });
    } else {
      res.json("YOU ARE NOT ALLOWED TO CARRY OUT THIS ACTION");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getTheStudentsAcrossCourse(req, res) {
  try {
    const data = await getStudentsAcrossCourse(req.body);
    if (data) {
      res.status(200).json({
        message: `HERE ARE THE STUDENTS OFFERING ${req.body.course_code}`,
        data,
      });
    } else {
      res.json("YOU ARE NOT ALLOWED TO CARRY OUT THIS ACTION");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getAllTheCourses(req, res) {
  try {
    const data = await getAllCourses(req.body);
    if (data) {
      res.status(200).json({
        message: "HERE ARE THE COURSES AVAILABLE",
        data,
      });
    } else {
      res.json("YOU ARE NOT ALLOWED TO CARRY OUT THIS ACTION");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getTheCoursesEnrolledFor(req, res) {
  try {
    const data = await getCoursesEnrolledFor(req.body);
    if (data) {
      res.status(200).json({
        message: "HERE ARE YOUR REGISTERED COURSES",
        data,
      });
    } else {
      res.json("YOU ARE NOT ALLOWED TO CARRY OUT THIS ACTION");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
