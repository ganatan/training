# Installation des tests

  - installation
    
    
    npm install --save-dev jest
    npx jest --init


    Choisir v8

  - Rajout des scripts

   "test": "jest",
    "coverage": "jest --coverage"  

  - Exclure le projet angular src/renderer des tests



  fichier jest.config.js

  /** @type {import('jest').Config} */
const config = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  testPathIgnorePatterns: ["\\\\node_modules\\\\", "src/renderer"]
}

module.exports = config


1er test

main.test.js

describe('smoke test', () => {
  test('should pass', () => {
    expect(true).toBe(true)
  })
})



# modifier eslint.config.mjs pour integrer la gestion du lint

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      }
    }
