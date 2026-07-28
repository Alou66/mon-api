import { ZodError } from "zod";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";

export const errorMiddleware = (err, req, res, next) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Erreur de validation",
      errors: err.issues.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      })),
    });
  }

  if (err instanceof PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      return res.status(409).json({
        success: false,
        message: "Ressource déjà existante",
      });
    }
    if (err.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Ressource introuvable",
      });
    }
  }

  console.error(err);

  return res.status(500).json({
    success: false,
    message: "Erreur serveur",
  });
};
