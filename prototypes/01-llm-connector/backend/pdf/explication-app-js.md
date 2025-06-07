
# Explication du fichier `app.js`

Fichier principal d’un backend Node.js avec Express – utilisé pour initialiser l’API.

---

```js
import express from 'express';
```
**Import du framework Express**  
Permet de créer des routes HTTP et gérer un serveur facilement.

```js
import cors from 'cors';
```
**Import du module CORS**  
Autorise les requêtes depuis un domaine différent, ex. Angular en localhost:4200.

```js
import dotenv from 'dotenv';
```
**Chargement des variables d’environnement**  
Permet de configurer les secrets/API keys via un fichier `.env`.

```js
import aiRoutes from './routes/ai.js';
import aiServices from './config/ai-services.js';
```
**Import de modules internes**  
- `aiRoutes` : routes dynamiques vers différents LLM (ChatGPT, Claude)  
- `aiServices` : liste des IA disponibles exposée à l’interface

```js
dotenv.config();
```
**Activation de la configuration .env**  
Rend les variables d’environnement disponibles via `process.env`.

```js
const app = express();
const port = 3000;
```
**Initialisation de l’application Express**  
Définition du port d’écoute local (3000 par défaut).

```js
app.use(cors());
app.use(express.json());
```
**Middlewares globaux**  
- `cors()` : autorise les requêtes externes (frontend)
- `express.json()` : parse automatiquement les requêtes JSON

```js
app.use('/api/ai', aiRoutes);
```
**Montage des routes IA sur `/api/ai`**  
Toutes les routes définies dans `aiRoutes` sont accessibles via `/api/ai/...`.

```js
app.get('/api/ai/services', (req, res) => {
  res.json({ services: aiServices });
});
```
**Route utilitaire pour récupérer les services IA disponibles**  
Exposée pour affichage dynamique côté frontend.

```js
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
```
**Démarrage du serveur**  
Affiche une confirmation dans la console, l’API est accessible à l’URL indiquée.

---

## 🧠 Résumé

Ce fichier configure un **serveur Express minimaliste** :
- prêt à recevoir des appels API JSON
- sécurisé pour une utilisation cross-domain
- connecté à plusieurs IA (LLM) via une architecture simple
- facilement extensible et modulaire
