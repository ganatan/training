# Installation


  Installation des dependances
    npm install --save-dev eslint
    npm init @eslint/config@latest

  Rajouter le script

    "lint": "eslint ."

  Modifier le fichier eslint.config.js

    version deepseek

    import globals from 'globals';
    import pluginJs from '@eslint/js';

    export default [
      {
        languageOptions: {
          globals: { ...globals.node }
        }
      },
      pluginJs.configs.recommended,
      {
        rules: {
          'no-console': 'off',
        },
      },
    ];

    ou

      version ChatGPT

    import globals from "globals";
    import pluginJs from "@eslint/js";

    export default [
      {
        languageOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
          globals: globals.node,
        },
        rules: {
          "indent": ["error", 2],
          "quotes": ["error", "single"],
          "semi": ["error", "always"],
          "no-unused-vars": ["warn"],
          "no-console": "off"
        }
      },
      pluginJs.configs.recommended,
    ];


Lancer npm run lint
en fonction de 
  "quotes": ["error", "single"],

supprimer les double quotes     par quotes



# Tester le lint
rajouter le code
  let toto = 1111;

et verifier le lint  
