# API de gestion des étudiants

Stack: Node.js ES Modules, Express 5, Prisma 7.9.1, PostgreSQL, Zod, dotenv, nodemon, tsx.

## Prérequis

- Node.js >= 20.19
- PostgreSQL (base `etu_db` existante)

## Installation

```bash
npm install
```

## Configuration PostgreSQL

- Mettre à jour le fichier `.env` avec vos identifiants.

## Génération Prisma Client

```bash
npm run prisma:generate
```

> **Note** : Prisma 7 avec output personnalisé génère des fichiers TypeScript. Ce projet utilise `tsx` comme runtime pour exécuter les imports TypeScript sans étape de compilation explicite.

## Migration Prisma

```bash
npm run prisma:migrate --name init
```

## Lancement du serveur

Développement :
```bash
npm run dev
```

Production :
```bash
npm start
```

## Tests des routes avec Postman

### 1. Récupérer tous les étudiants
- **Méthode** : `GET`
- **URL** : `http://localhost:3000/students`

### 2. Créer un étudiant
- **Méthode** : `POST`
- **URL** : `http://localhost:3000/students`
- **Headers** : `Content-Type: application/json`
- **Body** (JSON brut) :
```json
{
  "nom": "Dupont",
  "prenom": "Jean",
  "email": "jean.dupont@example.com",
  "telephone": "0612345678"
}
```

## Architecture

```
src/
├── app.js
├── server.js
├── routes/
│   └── student.routes.js
├── controllers/
│   └── student.controller.js
├── services/
│   └── student.service.js
├── repositories/
│   └── student.repository.js
├── validations/
│   └── student.schema.js
├── middlewares/
│   └── error.middleware.js
└── lib/
    └── prisma.js
```

## Variables d'environnement

Fichier `.env` :

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/etu_db"
PORT=3000
```

## Scripts npm

- `npm run dev` : Démarre le serveur avec nodemon + tsx.
- `npm start` : Démarre le serveur en production avec tsx.
- `npm run prisma:generate` : Génère le client Prisma (output TypeScript vers `generated/prisma/`).
- `npm run prisma:migrate` : Applique les migrations Prisma.
- `npm run prisma:studio` : Ouvre Prisma Studio.
