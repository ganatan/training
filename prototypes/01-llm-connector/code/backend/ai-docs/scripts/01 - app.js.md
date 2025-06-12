# Tutoriel Node.js avec Express, CORS et Dotenv

Dans ce tutoriel, nous allons passer en revue un exemple de code Node.js utilisant Express, CORS et Dotenv. Nous allons expliquer chaque bloc de code en détail pour vous aider à comprendre comment ils fonctionnent ensemble.

## Importation des modules

```js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import aiRoutes from './routes/ai.js';
import aiServices from './config/ai-services.js';
```

Dans cette section, nous importons les modules nécessaires pour notre application. Cela comprend `express` pour la gestion du serveur, `cors` pour gérer les requêtes cross-origin, `dotenv` pour charger les variables d'environnement, ainsi que `aiRoutes` et `aiServices` qui sont des modules spécifiques à notre application.

## Configuration de l'application

```js
dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
```

Ici, nous configurons notre application. Nous utilisons `dotenv.config()` pour charger les variables d'environnement. Ensuite, nous créons une nouvelle instance d'Express et définissons le port sur lequel notre serveur sera à l'écoute. Enfin, nous utilisons `app.use(cors())` pour permettre les requêtes cross-origin et `app.use(express.json())` pour analyser les requêtes entrantes avec des charges utiles JSON.

## Définition des routes

```js
app.use('/api/ai', aiRoutes);
```

Dans cette section, nous définissons les routes pour notre application. Nous utilisons `app.use('/api/ai', aiRoutes)` pour dire à Express que toutes les requêtes commençant par '/api/ai' doivent être gérées par `aiRoutes`.

## Route pour obtenir les services AI

```js
app.get('/api/ai/services', (req, res) => {
  res.json({ services: aiServices });
});
```

Ici, nous définissons une route spécifique pour obtenir la liste des services AI. Cette route répond à une requête GET en renvoyant un objet JSON contenant la liste des services AI.

## Démarrage du serveur

```js
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
```

Enfin, nous démarrons notre serveur en écoutant sur le port spécifié. Une fois que le serveur est prêt, un message est affiché dans la console pour indiquer que le serveur est en écoute.

Et voilà ! Vous avez maintenant une meilleure compréhension de ce code Node.js. N'hésitez pas à l'expérimenter et à l'adapter à vos propres besoins.