# Installation TypeScript

## Installation globale

```bash
# installation en globale
npm install -g typescript

# Création d’un projet TypeScript
mkdir typescript-starter
cd typescript-starter

# Création du fichier `app.ts`
```typescript
console.log('Movie');

# Compilation et exécution
tsc app
node app

# Désinstallation
npm uninstall -g typescript
```
---


## Installation locale
```bash
# Installation
npm init -y
npm install --save-dev typescript

# Ajout des scripts dans `package.json`
```json
"scripts": {
  "build": "tsc app",
  "start": "node app"
}
```
---

