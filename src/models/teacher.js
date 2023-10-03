import client from "../config/db.js";

// Get Student(s) in a particular Course
export async function getStudentOfferingACourse(payLoad) {
  try {
    const { role, course_code } = payLoad;
    if (role == "teacher") {
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
        console.log("No student with course found");
        return false;
      }
    } else {
      console.log("unauthorized");
      return "UNATHORIZED";
    }
  } catch (err) {
    console.error(err.message);
    throw err;
  } finally {
    await client.end();
  }
}

//Get lecturer in Personal Course
export async function getLecturerInACourse(payLoad) {
  try {
    const { role, course_code } = payLoad;
    if (role == "teacher") {
      const query = `
        SELECT teacher_username
        FROM courses
        WHERE code = $1
        `;
      const values = [course_code];
      const result = await client.query(query, values);
      if (result.rows.length > 0) {
        console.log(result.rows);
        return result.rows;
      } else {
        console.log(`NO TEACHER FOUND WITH ${course_code}`);
        return false;
      }
    } else {
      console.log("unauthorized");
      return "UNATHORIZED";
    }
  } catch (err) {
    console.error(err.message);
    throw err;
  } finally {
    await client.end();
  }
}

// Drop Student from Course
export async function dropStudentFromCourse(payLoad) {
  try {
    const { role, course_code, student_username } = payLoad;
    if (role == "teacher") {
      const query = `
        DELETE FROM registeredcourses
        WHERE course_code = $1 AND student_username = $2
        RETURNING *
        `;
      const values = [course_code, student_username];
      const result = await client.query(query, values);
      if (result.rowCount > 0) {
        console.log(result.rows);
        return result.rows;
      } else {
        console.log(`NO STUDENT FOUND WITH ${course_code}`);
        return false;
      }
    } else {
      console.log("unauthorized");
      return "UNATHORIZED";
    }
  } catch (err) {
    console.error(err.message);
    throw err;
  } finally {
    await client.end();
  }
}

const payloader = {
  role: "teacher",
  course_code: "CMP207",
  student_username: "kolawole",
};

// getStudentOfferingACourse(payloader);
// getLecturerInACourse(payloader);
// dropStudentFromCourse(payloader);
