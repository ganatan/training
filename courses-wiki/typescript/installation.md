# Installation TypeScript

## Installation globale
```sh
npm install -g typescript
```

## Création d’un projet TypeScript
```sh
mkdir typescript-starter
cd typescript-starter
```

### Fichier `app.ts`
```typescript
console.log('Movie');
```

### Compilation et exécution
```sh
tsc app
node app
```

### Désinstallation
```sh
npm uninstall -g typescript
```

---

## Installation locale
```sh
npm init -y
npm install --save-dev typescript
```

### Ajout des scripts dans `package.json`
```json
"scripts": {
  "build": "tsc app",
  "start": "node app"
}
```
