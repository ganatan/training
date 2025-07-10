
  Installation des dependances
    npm install --save-dev eslint
    
    npm init @eslint/config@latest


  Modifier le fichier eslint.config.js
  En rajoutant les rueles


import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { globals: globals.node }
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "no-unused-vars": ["warn"],
      "no-console": "off"
    }
  },
];


