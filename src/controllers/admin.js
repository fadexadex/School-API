import { dropStudent } from "../models/admin.js";
import { createCourse } from "../models/admin.js";
import { deleteCourse } from "../models/admin.js";
import { getAdmin } from "../models/admin.js";
import { getTeacher } from "../models/admin.js";

export async function dropAStudent(req, res) {
  try {
    const data = await dropStudent(req.body);
    if (data) {
      res.status(200).json({ message: "STUDENT DROPPED SUCCESSFULLY", data });
    } else if ("STUDENT NOT FOUND") {
      res.json("STUDENT NOT FOUND");
    } else {
      res.json("YOU ARE NOT ALLOWED TO CARRY OUT THIS ACTION");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createACourse(req, res) {
  try {
    const data = await createCourse(req.body);
    if (data) {
      res.status(200).json({ message: "COURSE CREATED SUCCESSFULLY", data });
    } else {
      res.json("YOU ARE NOT ALLOWED TO CARRY OUT THIS ACTION");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteACourse(req, res) {
  try {
    const data = await deleteCourse(req.body);
    if (data) {
      res.status(200).json({ message: "COURSE DELETED SUCCESSFULLY", data });
    } else {
      res.json("YOU ARE NOT ALLOWED TO CARRY OUT THIS ACTION");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getTheAdmins(req, res) {
  try {
    const data = await getAdmin(req.body);
    if (data) {
      res.status(200).json({ message: "HERE ARE THE ADMINS", data });
    } else {
      res.json("YOU ARE NOT ALLOWED TO CARRY OUT THIS ACTION");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getTheTeachers(req, res) {
  try {
    const data = await getTeacher(req.body);
    if (data) {
      res.status(200).json({ message: "HERE ARE THE TEACHERS", data });
    } else {
      res.json("YOU ARE NOT ALLOWED TO CARRY OUT THIS ACTION");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
