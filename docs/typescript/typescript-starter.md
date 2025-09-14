# Init Repo
  npm init -y

# Installation
  npm install --save-dev typescript ts-node @types/node
  npx tsc --init

  npm install --save-dev nodemon

# Modifier tsconfig.json
  "rootDir": "./src",
  "outDir": "./dist",

# Scripts  
  "dev": "nodemon --watch src --exec ts-node src/app.ts",
  "start": "node dist/app.js",
  "build": "tsc",
  "serve": "ts-node src/app.ts"