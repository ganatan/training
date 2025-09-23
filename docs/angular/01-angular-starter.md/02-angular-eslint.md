
# Installation
  npm uninstall -g @angular/cli
  npm install -g @angular/cli

# Creation Starter
  ng new angular-starter

  Options
    CSS
    SSR (not)
    Zoneless (not)
    IA (not)

# Check dependencies
  npm list --depth=0
  npm outdated

# Rajout du coverage
  "coverage": "ng test --no-watch --code-coverage"


# angular-eslint

  ng add @angular-eslint/schematics

  Répondre oui à la question
  The package @angular-eslint/schematics@20.3.0 will be installed and executed.

# Test du code source
  npm run lint

# Modifier les rules de lint
  dans 

  eslint.config.js

    rules: {
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
        "no-console": ["error", { "allow": ["warn", "error"] }]
      },

# Rajouter une erreur

dans app.ts

  export class App {
    protected readonly title = signal('angular-starter');

    constructor() {
      console.log('Error lint');
    }
  }

  npm run lint

    13:5  error  Unexpected console statement. Only these console methods are allowed: warn, error  no-console

# Rajout du script pour pipeline

    "test:ci": "ng test --watch=false --browsers=ChromeHeadlessNoSandbox",

# Fichier gitlab-ci Modele

  workflow:
    rules:
      - changes:
          - angular/angular-starter/**/*
      - when: never

  image: node:20

  stages:
    - install
    - test
    - build

  .default-angular-starter:
    variables:
      PROJECT_DIR: angular/angular-starter
    cache:
      key: angular-starter
      paths:
        - $PROJECT_DIR/node_modules/
      policy: pull-push
    artifacts:
      paths:
        - $PROJECT_DIR/node_modules/
      expire_in: 1h

  install:angular-starter:
    stage: install
    extends: .default-angular-starter
    script:
      - echo "Installing dependencies"
      - cd $PROJECT_DIR
      - npm ci

  test:angular-starter:
    stage: test
    extends: .default-angular-starter
    dependencies:
      - install:angular-starter
    script:
      - echo "Installing Chromium for headless tests"
      - apt-get update && apt-get install -y chromium
      - export CHROME_BIN=/usr/bin/chromium
      - cd $PROJECT_DIR
      - echo "Running Angular unit tests in ChromeHeadless"
      - npm run test:ci

  build:angular-starter:
    stage: build
    extends: .default-angular-starter
    dependencies:
      - install:angular-starter
    script:
      - echo "Building Angular app for production"
      - cd $PROJECT_DIR
      - npm run build --configuration=production
    artifacts:
      paths:
        - $PROJECT_DIR/dist/
      expire_in: 1 week
