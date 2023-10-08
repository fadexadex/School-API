import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "./config/env.js";
import authRoute from "./routes/auth_routes.js";
import adminRoute from "./routes/admin_route.js";
import studentRoute from "./routes/student_route.js";
import teacherRoute from "./routes/teacher_route.js";
import { authUser } from "./middleware/auth.js";
import { errorHandler } from "./middleware/errrorHandler.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRoute);
app.use(authUser);
app.use("/admin", adminRoute);
app.use("/student", studentRoute);
app.use("/teacher", teacherRoute);
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
