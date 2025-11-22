
# Fichier package.json
    "files": [
      "apps/electron/**/*",
      "dist/apps/frontend-angular/browser/**/*",
      "dist/apps/backend-typescript/**/*",
      "package.json",
      "node_modules/**/*",
      "!**/node_modules/**",
      "node_modules/ws/**/*",
      "node_modules/dotenv/**/*"

    ],


# Fichier qui marche

{
  "name": "backend-typescript",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "apps/backend-typescript/src",
  "projectType": "application",
  "tags": [],
  "targets": {
    "build": {
      "executor": "@nx/esbuild:esbuild",
      "outputs": ["{options.outputPath}"],
      "defaultConfiguration": "production",
      "options": {
        "platform": "node",
        "outputPath": "dist/apps/backend-typescript",
        "format": ["cjs"],
        "bundle": true,
        "thirdParty": true,
        "main": "apps/backend-typescript/src/main.ts",
        "tsConfig": "apps/backend-typescript/tsconfig.app.json",
        "assets": ["apps/backend-typescript/src/assets"],
        "generatePackageJson": false,
        "esbuildOptions": {
          "sourcemap": true,
          "outExtension": {
            ".js": ".js"
          },
          "minify": false,
          "target": "node18",
          "platform": "node"
        },
        "external": []
      },
      "configurations": {
        "development": {
          "esbuildOptions": {
            "sourcemap": true,
            "minify": false
          }
        },
        "production": {
          "esbuildOptions": {
            "sourcemap": false,
            "minify": true,
            "outExtension": {
              ".js": ".js"
            }
          }
        }
      }
    },
    "serve": {
      "continuous": true,
      "executor": "@nx/js:node",
      "defaultConfiguration": "development",
      "dependsOn": ["build"],
      "options": {
        "buildTarget": "backend-typescript:build",
        "runBuildTargetDependencies": false
      },
      "configurations": {
        "development": {
          "buildTarget": "backend-typescript:build:development"
        },
        "production": {
          "buildTarget": "backend-typescript:build:production"
        }
      }
    },
    "test": {
      "executor": "@nx/jest:jest",
      "outputs": ["{workspaceRoot}/coverage/{projectRoot}"],
      "options": {
        "jestConfig": "apps/backend-typescript/jest.config.ts",
        "passWithNoTests": true
      }
    }
  }
}

# Explications


La version MINIMALE fonctionnelle (si tu veux être ultra-simple)

👉 Oui, tu peux te contenter de modifier le target build existant, mais tu dois changer QUATRE options obligatoires, sinon ça casse.

Voici le target build minifié pour bundler :

"build": {
  "executor": "@nx/esbuild:esbuild",
  "outputs": ["{options.outputPath}"],
  "options": {
    "platform": "node",
    "outputPath": "dist/apps/backend-typescript",
    "format": ["cjs"],
    "bundle": true,
    "main": "apps/backend-typescript/src/main.ts",
    "tsConfig": "apps/backend-typescript/tsconfig.app.json",
    "assets": [],
    "generatePackageJson": false,
    "esbuildOptions": {
      "sourcemap": false,
      "outExtension": {
        ".js": ".bundle.js"
      }
    }
  }
}

📌 Les 4 modifications obligatoires expliquées
✅ 1) "bundle": true

Active le bundling… mais pas suffisant tout seul.

❗ 2) "generatePackageJson": false

Sinon Nx te génère un package.json dans dist/ et ton bundle devient inutilisable.

❗ 3) "assets": []

Pour éviter que Nx copie des fichiers inutiles et écrase les sorties.

❗ 4) "outExtension": { ".js": ".bundle.js" }

Pour que le bundle ne remplace pas ton main.js normal :

Sortie finale :

dist/apps/backend-typescript/main.bundle.js

(Optionnel mais conseillé)

sourcemap: false → build plus léger