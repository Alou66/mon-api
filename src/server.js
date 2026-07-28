import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.error("Erreur non gérée :", err);
  process.exit(1);
});