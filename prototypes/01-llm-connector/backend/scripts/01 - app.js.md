# Explication du fichier 01 - app.js.md

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

Ce bloc de code crée un serveur web avec Node.js en utilisant le framework Express. 

1. Il importe d'abord les modules nécessaires : `express` pour créer le serveur, `cors` pour gérer les requêtes Cross-Origin (qui proviennent d'un autre domaine), `dotenv` pour gérer les variables d'environnement, et des modules personnalisés pour gérer les routes et les services liés à l'IA.

2. Il charge ensuite les variables d'environnement à partir d'un fichier `.env` avec `dotenv.config()`.

3. Il crée une application Express avec `const app = express();` et définit un port sur lequel le serveur va écouter.

4. Il active ensuite l'utilisation de `cors` et du format JSON pour les requêtes entrantes avec `app.use(cors());` et `app.use(express.json());`.

5. Il définit ensuite une route `/api/ai` qui sera gérée par le module `aiRoutes`.

6. Il définit une autre route `/api/ai/services` qui répondra avec un objet JSON contenant les services d'IA disponibles.

7. Enfin, il démarre le serveur avec `app.listen(port, ...);` et affiche un message dans la console pour indiquer que le serveur est en écoute.
