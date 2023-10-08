import client from "../config/db.js";

// Enroll in a Course
export async function enrollInCourse(payLoad) {
  try {
    const { role, course_code, student_username } = payLoad;
    if (role == "student") {
      const query = `
          INSERT INTO registeredCourses(course_code, student_username)
          VALUES ($1, $2)
          RETURNING *
          `;
      const values = [course_code, student_username];
      const result = await client.query(query, values);
      if (result.rows.length > 0) {
        console.log(result.rows);
        return result.rows;
      } else {
        console.log(`No course with the code ${course_code} found`);
        return false;
      }
    } else {
      console.log("unauthorized");
      return "UNATHORIZED";
    }
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

// Drop Course
export async function dropCourse(payLoad) {
  try {
    const { role, course_code, student_username } = payLoad;
    if (role == "student") {
      const query = `
          DELETE FROM registeredcourses
          WHERE course_code = $1 AND student_username = $2
          RETURNING *
          `;
      const values = [course_code, student_username];
      const result = await client.query(query, values);
      console.log(result.rows);
      return result.rows;
    } else {
      console.log("unauthorized");
      return "UNATHORIZED";
    }
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

//Get STUDENT(S) across Personal COURSE
export async function getStudentsAcrossCourse(payLoad) {
  try {
    const { role, course_code } = payLoad;
    if (role == "student") {
      const query = `
          SELECT student_username
          FROM registeredcourses
          WHERE course_code = $1
          `;
      const values = [course_code];
      const result = await client.query(query, values);
      if (result.rows.length > 0) {
        console.log(result.rows);
        return result.rows;
      } else {
        console.log("students not found");
        return "students not found";
      }
    } else {
      console.log("unauthorized");
      return "UNATHORIZED";
    }
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

// Get All Course(S)
export async function getAllCourses(payLoad) {
  try {
    const { role } = payLoad;
    if (role == "student") {
      const query = `
          SELECT code
          FROM courses
          `;
      const result = await client.query(query);
      console.log(result.rows);
      return result.rows;
    } else {
      console.log("unauthorized");
      return "UNATHORIZED";
    }
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

// Get Courses enrolled for
export async function getCoursesEnrolledFor(payLoad) {
  try {
    const { role, student_username } = payLoad;
    if (role == "student") {
      const query = `
          SELECT course_code
          FROM registeredcourses
          WHERE student_username = $1
          `;
      const values = [student_username];
      const result = await client.query(query, values);
      if (result.rows.length > 0) {
        console.log(result.rows);
        return result.rows;
      } else {
        console.log("NOT REGISTERED IN ANY COURSE");
        return "NOT REGISTERED IN ANY COURSE";
      }
    } else {
      console.log("unauthorized");
      return "UNATHORIZED";
    }
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

// const payloader = {
//   role: "student",
//   course_code: "CMP207",
//   student_username: "kolawole",
// };

// enrollInCourse(payloader);
// // dropCourse(payloader);
// getStudentsAcrossCourse(payloader);
// getAllCourses(payloader);
// getCoursesEnrolledFor(payloader);
