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
      "no-console": "off",
      'eqeqeq': 'error',
      'curly': 'error',
      'no-unused-vars': ['error', { 'args': 'none', 'ignoreRestSiblings': true }],
      'no-undef': 'error',
      'no-redeclare': 'error',
      'consistent-return': 'error',
      'no-shadow': 'error',
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'callback-return': 'error',
      'handle-callback-err': ['error', '^.*(e|E)rr'],
      'no-new-require': 'error',
      'no-path-concat': 'error',
      'no-process-exit': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'strict': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-empty': 'error',
      'no-mixed-operators': 'error',
      'no-trailing-spaces': 'error',
      'linebreak-style': 'off',
      'max-len': 'off',
      'no-param-reassign': 'off',
      'prefer-destructuring': 'off',
      'prefer-arrow-callback': 'off',
      'func-names': 'error',
      'arrow-parens': 'off',
      'dot-notation': 'off',
      'import/prefer-default-export': 'off',
      'import/first': 'off',
      'no-template-curly-in-string': 'off',
      'new-cap': ['error', { 'capIsNew': false }],
      'array-callback-return': 'error',
      'object-shorthand': ['error', 'consistent'],
      'function-paren-newline': ['error', 'consistent'],
      'quote-props': ['error', 'as-needed'],
      'operator-linebreak': ['error', 'before'],
      'prefer-template': 'error',
      'id-length': 'error',
      'newline-before-return': 'error',
      'space-before-blocks': 'error',
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
    },
  },
];