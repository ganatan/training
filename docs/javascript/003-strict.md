# Définition

  Le mode strict est une option du langage introduite avec ES5 (2009).
  Il rend JavaScript plus sûr, plus cohérent et plus exigeant.

  On l’active avec :

  "use strict";


# Désactivation du mode strict

  Tu ne peux pas désactiver le mode strict dans :
      les modules ES (.mjs ou "type": "module")
      les classes

# Pour revenir en non strict

  Il faut exécuter ton code en CommonJS
  ➡️ donc sans "type": "module"      

  Exemple package.json
  {
    "name": "javascript-non-strict",
    "version": "1.0.0",
    "main": "app.js",
    "scripts": {
      "start": "node app.js"
    }
  }
