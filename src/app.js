import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import studentRoutes from "./routes/student.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/students", studentRoutes);

app.use(errorMiddleware);

export default app;