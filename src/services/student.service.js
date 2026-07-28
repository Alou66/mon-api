import * as repository from "../repositories/student.repository.js";

export const getStudents = () => {
  
  return repository.findAllStudents();
};

export const addStudent = (student) => {
  return repository.createStudent(student);
};