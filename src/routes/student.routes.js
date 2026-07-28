import { Router } from "express";
import * as controller from "../controllers/student.controller.js";

const router = Router();

router.get("/", controller.getStudents);

router.post("/", controller.createStudent);

export default router;