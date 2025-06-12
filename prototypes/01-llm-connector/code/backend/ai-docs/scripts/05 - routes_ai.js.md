# Tutoriel Node.js : Gestion des requêtes avec Express et Dotenv

Dans ce tutoriel, nous allons décomposer un bloc de code Node.js qui utilise les modules `express` et `dotenv`, ainsi que des services et des mocks spécifiques pour gérer les requêtes.

## Code complet

```js
import express from 'express';
import dotenv from 'dotenv';

import chatgptMock from '../mock/llm/chatgpt.mock.js';
import claudeMock from '../mock/llm/claude.mock.js';
import chatgptReal from '../services/llm/chatgpt.service.js';
import claudeReal from '../services/llm/claude.service.js';

dotenv.config();

const router = express.Router();
const useMock = process.env.USE_MOCK === 'true';

function isUnauthorizedError(message) {
  return message.includes('unauthorized') || message.includes('401');
}

function getProvider(llm) {
  const providers = {
    chatgpt: {
      mock: chatgptMock,
      real: chatgptReal,
    },
    claude: {
      mock: claudeMock,
      real: claudeReal,
    },
  };

  return providers[llm] || null;
}

async function handleLLMRequest(type, llm, data) {
  const provider = getProvider(llm);
  if (!provider) { return { error: 'unknown-provider' }; }

  const fn = useMock ? provider.mock : provider.real;

  return { data: await fn(type, data) };
}

router.post('/:type/:llm', async (req, res) => {
  const { type, llm } = req.params;
  const input = req.body;

  try {
    const { data, error } = await handleLLMRequest(type, llm, input);

    if (error) {
      return res.status(400).json({ success: false, llm: llm, data: error });
    }

    return res.json({ success: true, llm: llm, data: data });

  } catch (err) {
    const msg = err.message?.toLowerCase() || '';
    const isUnauthorized = isUnauthorizedError(msg);

    return res.status(500).json({
      success: false,
      llm: llm,
      data: isUnauthorized ? 'unauthorized API KEY' : 'internal-error',
    });
  }
});

export default router;
```

## Explications

### Importation des modules et configuration

```js
import express from 'express';
import dotenv from 'dotenv';

import chatgptMock from '../mock/llm/chatgpt.mock.js';
import claudeMock from '../mock/llm/claude.mock.js';
import chatgptReal from '../services/llm/chatgpt.service.js';
import claudeReal from '../services/llm/claude.service.js';

dotenv.config();

const router = express.Router();
const useMock = process.env.USE_MOCK === 'true';
```

Dans cette section, nous importons les modules nécessaires pour notre application. Nous utilisons `express` pour gérer notre serveur HTTP et `dotenv` pour gérer les variables d'environnement. Nous importons également des mocks et des services réels pour deux fournisseurs : `chatgpt` et `claude`.

Nous configurons ensuite `dotenv` pour qu'il puisse lire les variables d'environnement de notre fichier `.env`. Ensuite, nous initialisons un routeur `express` et déterminons si nous devons utiliser des mocks ou des services réels en fonction de la variable d'environnement `USE_MOCK`.

### Fonctions utilitaires

```js
function isUnauthorizedError(message) {
  return message.includes('unauthorized') || message.includes('401');
}

function getProvider(llm) {
  const providers = {
    chatgpt: {
      mock: chatgptMock,
      real: chatgptReal,
    },
    claude: {
      mock: claudeMock,
      real: claudeReal,
    },
  };

  return providers[llm] || null;
}
```

Ici, nous définissons deux fonctions utilitaires. `isUnauthorizedError` vérifie si un message d'erreur contient des indications d'une erreur d'autorisation. `getProvider` récupère le bon fournisseur (mock ou réel) en fonction du paramètre `llm`.

### Gestion des requêtes

```js
async function handleLLMRequest(type, llm, data) {
  const provider = getProvider(llm);
  if (!provider) { return { error: 'unknown-provider' }; }

  const fn = useMock ? provider.mock : provider.real;

  return { data: await fn(type, data) };
}

router.post('/:type/:llm', async (req, res) => {
  const { type, llm } = req.params;
  const input = req.body;

  try {
    const { data, error } = await handleLLMRequest(type, llm, input);

    if (error) {
      return res.status(400).json({ success: false, llm: llm, data: error });
    }

    return res.json({ success: true, llm: llm, data: data });

  } catch (err) {
    const msg = err.message?.toLowerCase() || '';
    const isUnauthorized = isUnauthorizedError(msg);

    return res.status(500).json({
      success: false,
      llm: llm,
      data: isUnauthorized ? 'unauthorized API KEY' : 'internal-error',
    });
  }
});
```

Dans cette section, nous définissons une fonction `handleLLMRequest` pour gérer les requêtes à nos fournisseurs. Elle récupère le bon fournisseur, exécute la fonction appropriée (mock ou réelle) et renvoie les données.

Ensuite, nous définissons une route `POST` pour notre routeur express. Cette route extrait les paramètres de la requête, les passe à `handleLLMRequest`, et renvoie une réponse appropriée en fonction du succès ou de l'échec de la requête. En cas d'erreur, elle vérifie si l'erreur est due à une autorisation non valide et renvoie un message d'erreur approprié.