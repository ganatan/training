# Prompt
  
  mon package.json

    {
    "name": "electron-starter",
    "version": "1.0.0",
    "description": "electron-starter description",
    "main": "src/main/main.js",
    "scripts": {
      "generate-project-structure": "node tools/scripts/generate-project-structure.js",
      "dev": "electron .",
      "start": "electron .",
      "lint": "eslint .",
      "test": "jest",
      "coverage": "jest --coverage",
      "build": "electron-builder",
      "build-win": "electron-builder --win",
      "build-mac": "electron-builder --mac",
      "build-linux": "electron-builder --linux",
      "pack": "electron-builder --dir",
      "dist": "electron-builder"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "type": "commonjs",
    "dependencies": {
      "ws": "8.18.3"
    },
    "devDependencies": {
      "@eslint/js": "9.30.1",
      "electron": "37.1.0",
      "electron-builder": "26.0.12",
      "eslint": "9.30.1",
      "globals": "16.3.0",
      "jest": "30.0.3",
      "jest-cli": "30.0.3"
    },
    "build": {
      "win": {
        "forceCodeSigning": false
      },
      "nsis": {
        "oneClick": false
      }
    }
  }
  

  configuration de build

  electron-builder, electron-forge, ou vite

  actuellement pas de script de packaging dans package.json
  → ça va te manquer pour produire un .exe ou .dmg



  comment integrer dans mon projet electron

