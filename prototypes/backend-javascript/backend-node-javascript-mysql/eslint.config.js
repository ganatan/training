import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    ignores: [
      'dist/**',
      'eslint.config.js',
      'webpack.config.js'
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'module',
    },
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