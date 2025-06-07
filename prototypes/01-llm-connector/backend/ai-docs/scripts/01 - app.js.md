# Node.js Express Server Tutorial

Ce tutoriel explique comment mettre en place un serveur Express en Node.js. Le code ci-dessous montre un exemple de serveur qui utilise plusieurs modules tels que `express`, `cors`, `dotenv` et des routes personnalisées.

## Code complet

```js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import aiRoutes from './routes/ai.js';
import aiServices from './config/ai-services.js';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/ai', aiRoutes);

app.get('/api/ai/services', (req, res) => {
  res.json({ services: aiServices });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
```

## Importation de modules

```js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import aiRoutes from './routes/ai.js';
import aiServices from './config/ai-services.js';
```

Dans cette section, nous importons tous les modules nécessaires pour notre serveur. `express` est le framework principal, `cors` est utilisé pour gérer les requêtes cross-origin, `dotenv` pour gérer les variables d'environnement et `aiRoutes` et `aiServices` sont des modules personnalisés pour gérer les routes et les services de notre application.

## Configuration du serveur

```js
dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
```

Ici, nous initialisons notre application Express et définissons le port d'écoute. Nous activons également le middleware CORS pour permettre les requêtes cross-origin et nous utilisons `express.json()` pour analyser les corps de requête au format JSON.

## Définition des routes

```js
app.use('/api/ai', aiRoutes);

app.get('/api/ai/services', (req, res) => {
  res.json({ services: aiServices });
});
```

Dans cette section, nous définissons les routes pour notre application. Nous utilisons le module `aiRoutes` pour gérer toutes les routes commençant par `/api/ai`. Ensuite, nous définissons une route supplémentaire `/api/ai/services` qui renvoie une liste de services disponibles.

## Démarrage du serveur

```js
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
```

Enfin, nous démarrons le serveur en écoutant sur le port spécifié. Une fois le serveur démarré, un message est affiché dans la console pour confirmer que le serveur est en écoute.