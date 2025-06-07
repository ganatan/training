# Tutoriel Node.js avec Express, CORS et dotenv

Dans ce tutoriel, nous allons examiner un exemple de code Node.js utilisant les bibliothèques Express, CORS et dotenv. Le code est structuré en plusieurs sections, chacune ayant une fonction spécifique dans l'application.

## Importation des modules

```js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
```

Dans cette section, nous importons trois modules :

- `express` : un cadre de travail minimaliste pour Node.js, utilisé pour construire des applications web et API rapidement et facilement.
- `cors` : un package Node.js pour fournir un middleware Connect/Express qui peut être utilisé pour activer CORS (Cross-Origin Resource Sharing) avec diverses options.
- `dotenv` : un module qui charge les variables d'environnement d'un fichier `.env` dans `process.env`.

## Configuration de dotenv

```js
dotenv.config();
```

Ici, nous appelons la méthode `config()` de `dotenv`, qui charge les variables d'environnement du fichier `.env` dans `process.env`. Cela nous permet d'accéder facilement à ces variables dans notre application.

## Initialisation de l'application Express

```js
const app = express();
const port = 3000;
```

Dans cette section, nous initialisons une nouvelle application Express et définissons le port sur lequel notre serveur écoutera.

## Configuration des middleware

```js
app.use(cors());
app.use(express.json());
```

Ici, nous configurons deux middleware pour notre application :

- `cors()` : ce middleware est utilisé pour activer le partage de ressources entre origines (CORS). Cela permet à notre serveur de répondre aux requêtes de différents domaines.
- `express.json()` : ce middleware est inclus dans Express et analyse les requêtes entrantes avec des charges utiles JSON, ce qui est une étape nécessaire pour que notre serveur puisse interpréter les données JSON envoyées dans les requêtes HTTP.

C'est tout pour ce tutoriel. Vous devriez maintenant avoir une meilleure compréhension de la façon dont ces modules fonctionnent ensemble dans une application Node.js.