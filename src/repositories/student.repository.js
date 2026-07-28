import { prisma } from "../lib/prisma.js";

export const findAllStudents = () => {
  return prisma.student.findMany({
    orderBy: {
      id: "desc",
    },
  });
};

export const createStudent = (data) => {
  return prisma.student.create({
    data,
  });
};