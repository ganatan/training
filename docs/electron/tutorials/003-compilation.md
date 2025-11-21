# Compilation
  Format par defaut
    app.asar
  Format avec toutes data
    dans package.json

# Gestion du build
  "build": {
    "appId": "com.ganatan.demo",
    "productName": "GanatanElectronApp",
    "asar": false,
    "directories": {
      "output": "dist/electron"
    },
    "files": [
      "apps/electron/**/*",
      "dist/apps/frontend-angular/**/*",
      "package.json",
      "!**/node_modules/**",
      "node_modules/ws/**/*",
      "node_modules/dotenv/**/*"
    ],
    "extraMetadata": {
      "main": "apps/electron/src/main.js"
    }
  },

ne sont pris en compte que si dans dpendencies
    "dotenv": "17.0.1",
    "ws": "^8.18.3",


# Exemple de build

  "build": {
    "appId": "com.ganatan.dialogconnector",
    "productName": "DialogConnector",
    "asar": false,
    "files": [
      "src/main/**/*",
      "src/renderer/html/**/*",
      "package.json"
    ],
    "extraMetadata": {
      "main": "src/main/main.js"
    },
    "directories": {
      "buildResources": "assets",
      "output": "dist/electron"
    },
    "mac": {
      "target": [
        "dmg",
        "zip"
      ]
    },
    "win": {
      "target": [
        "nsis"
      ]
    },
    "linux": {
      "target": [
        "AppImage"
      ]
    }
  },

# Exemple de build

    "build": {
      "appId": "com.ganatan.dialogconnector",
      "productName": "DialogConnector",
      "asar": false,
      "files": [
        "src/main/main.js",
        "src/renderer/angular/dist/**/*",
        "package.json"
      ],
      "directories": {
        "buildResources": "assets"
      },
      "mac": {
        "target": ["dmg", "zip"]
      },
      "win": {
        "target": ["nsis"]
      },
      "linux": {
        "target": ["AppImage"]
      }
    }


# Erreur lors de la compilation

  Electron-builder télécharge un outil de signature de code Windows (winCodeSign)
  et essaie d’extraire des symboles qui contiennent aussi des symlinks de type macOS/Linux (libcrypto.dylib).

  Sous Windows, la création de symlinks nécessite les droits administrateur ou d’avoir activé le mode développeur Windows.
  ça veut dire pas de privilège pour créer ces liens symboliques.


  Est-ce grave ?
    Outils de code-sign macOS non necessaire sur Windows.
 
  # Modifier package.json  !!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
    "build": {
  "win": {
    "sign": false
  }
}


# Passer en cmd en mode administrateur
La compilation fonctionnne




# Explications détaillées

Parfait, on peut analyser précisément ce que fait Electron Builder en mode non-ASAR, ce que tu vas voir, et ce que tu dois vérifier.

Je te fais une analyse technique, propre, et factuelle, basée sur TON projet.

✅ 1. Ce que tu obtiens en passant "asar": false

Ton package.json contient maintenant :

"build": {
  ...
  "asar": false,
  "files": [
    "src/main/main.js",
    "src/renderer/angular/dist/**/*",
    "package.json"
  ]
}


Donc Electron Builder n’emballe plus rien dans app.asar, mais génère un dossier app/ complet.

Structure finale dans :

dist/win-unpacked/resources/app/


Tu vas voir exactement :

app/
  package.json
  src/
    main/
      main.js
    renderer/
      angular/
        dist/
          angular-starter/
            browser/
              index.html
              *.js
              *.css
              assets/
  node_modules/
    ws/
    dotenv/
    (dépendances transitives)


Il n’y a rien d’autre.

🎯 2. Pourquoi c’est utile

En mode non-asar :

tu peux ouvrir n’importe quel fichier

tu peux voir exactement ce qu’Electron embarque

tu peux inspecter node_modules

ton Angular buildé est visible

ton main.js est visible

le fonctionnement est identique au mode asar

Tu peux donc auditer tout le runtime Electron en un coup d’œil.

🧩 3. Ce que Electron Builder fait EXACTEMENT (non-ASAR)

Voici la séquence exacte :

✔️ Étape 1 : Nettoyage / préparation du répertoire temporaire
{TEMP}/electron-builder/app/

✔️ Étape 2 : Copie uniquement des éléments listés dans "files"

Dans ton cas :

src/main/main.js

src/renderer/angular/dist/**

package.json

✔️ Étape 3 : Installation automatique des dependencies

Parce que tu as :

"dependencies": {
  "dotenv": "17.0.1",
  "ws": "^8.18.3"
}


Electron Builder exécute un npm install des dépendances runtime, et dépose un node_modules propre dans :

app/node_modules/


IMPORTANT :
Les devDependencies NE SONT PAS copiées.

✔️ Étape 4 : Mise en place dans resources/app/

Electron Builder copie l’ensemble dans :

dist/win-unpacked/resources/app/

✔️ Étape 5 : Inclusion du runtime Electron (binaire)

Il ajoute :

electron.exe
chrome_*.dll
ffmpeg.dll
node.dll
v8_snapshot.bin
etc.


dans dist/win-unpacked/.

🔬 4. Résumé de ce que tu vas voir maintenant
📁 win-unpacked/resources/app/

Tu vas retrouver :

package.json
src/main/main.js
src/renderer/angular/dist/angular-starter/browser/*
node_modules/ws
node_modules/dotenv


Tu peux tout ouvrir, tout inspecter.

🛠️ 5. Ce que tu dois vérifier maintenant
✔️ Vérifier que node_modules contient uniquement les deps runtime

Dans :

dist/win-unpacked/resources/app/node_modules/


tu dois avoir exactement :

ws

dotenv

leurs dépendances internes

Aucun autre module.

✔️ Vérifier que ton Angular build est bien là

Dans :

src/renderer/angular/dist/angular-starter/browser/index.html

✔️ Vérifier que main.js est à la bonne place
src/main/main.js

📌 6. Si tu veux optimiser

Tu peux ajouter des patterns d’exclusion :

"files": [
  "!**/*.md",
  "!**/test/**",
  "!**/tools/**"
]


Mais dans ton cas, ce n’est même pas nécessaire.

🎯 Conclusion technique

En mode non-ASAR, Electron Builder :

copie exactement tes fichiers whitelistés

installe automatiquement les runtime dependencies

crée un dossier app/ parfaitement lisible

n’ajoute aucun autre fichier

ne copie pas les devDependencies

laisse ton runtime Electron dans win-unpacked/

C’est simple, propre et totalement prédictible.