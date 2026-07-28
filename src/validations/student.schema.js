import { z } from "zod";

export const createStudentSchema = z.object({
  nom: z.string().min(2),
  prenom: z.string().min(2),
  email: z.email(),
  telephone: z.string().min(9),
});