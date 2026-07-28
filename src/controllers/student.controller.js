import * as service from "../services/student.service.js";
import { createStudentSchema } from "../validations/student.schema.js";

export const getStudents = async (req, res, next) => {
  try {
    const students = await service.getStudents();
    res.json({
      success: true,
      data: students,
    });
  } catch (error) {
    next(error);
  }
};

export const createStudent = async (req, res, next) => {
  try {
    const data = createStudentSchema.parse(req.body);
    const student = await service.addStudent(data);
    res.status(201).json({
      success: true,
      data: student,
    });
  } catch (error) {
    next(error);
  }
};