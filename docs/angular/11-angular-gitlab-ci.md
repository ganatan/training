# Pipeline Angular gitlab-ci

  Fichier de configuration
  
  - package.json

    {
      "name": "angular-starter",
      "version": "0.0.0",
      "scripts": {
        "ng": "ng",
        "start": "ng serve",
        "build": "ng build",
        "watch": "ng build --watch --configuration development",
        "test": "ng test",
        "test:ci": "ng test --watch=false --browsers=ChromeHeadlessNoSandbox",
        "ng:version": "ng --version",
        "coverage": "ng test --no-watch --code-coverage",
        "docker:list-containers": "docker ps -a",
        "docker:list-images": "docker images",
        "docker:list-volumes": "docker volume ls",
        "docker:app-build": "docker build -t frontend-angular -f docker/Dockerfile.frontend-angular .",
        "docker:app-run": "docker run -d --name frontend-angular -p 4000:80 frontend-angular",
        "docker:app-stop": "docker stop frontend-angular && docker rm frontend-angular",
        "docker:app-clean": "docker rm -f frontend-angular && docker rmi -f frontend-angular",
        "docker:app-logs": "docker logs -f frontend-angular"
      },
      "prettier": {
        "printWidth": 100,
        "singleQuote": true,
        "overrides": [
          {
            "files": "*.html",
            "options": {
              "parser": "angular"
            }
          }
        ]
      },
      "private": true,
      "dependencies": {
        "@angular/common": "20.3.1",
        "@angular/compiler": "20.3.1",
        "@angular/core": "20.3.1",
        "@angular/forms": "20.3.1",
        "@angular/platform-browser": "20.3.1",
        "@angular/router": "20.3.1",
        "@fortawesome/fontawesome-free": "7.0.1",
        "bootstrap": "5.3.8",
        "rxjs": "7.8.2",
        "tslib": "2.8.1",
        "zone.js": "0.15.1"
      },
      "devDependencies": {
        "@angular/build": "20.3.2",
        "@angular/cli": "20.3.2",
        "@angular/compiler-cli": "20.3.1",
        "@types/jasmine": "5.1.9",
        "jasmine-core": "5.10.0",
        "karma": "6.4.4",
        "karma-chrome-launcher": "3.2.0",
        "karma-coverage": "2.2.1",
        "karma-jasmine": "5.1.0",
        "karma-jasmine-html-reporter": "2.1.0",
        "typescript": "5.9.2"
      }
    }

  Fichier de Pipeline gitlab

  - gitlab-ci.yml

    image: node:20

    stages:
      - install
      - test
      - build

    install:
      stage: install
      script:
        - echo "Installing dependencies"
        - npm ci
      cache:
        paths:
          - node_modules/
        policy: pull-push
      artifacts:
        paths:
          - node_modules/
        expire_in: 1h

    test:
      stage: test
      script:
        - echo "Installing Chromium for headless tests"
        - apt-get update && apt-get install -y chromium
        - export CHROME_BIN=/usr/bin/chromium
        - echo "Running Angular unit tests in ChromeHeadless"
        - npm run test:ci
      dependencies:
        - install

    build:
      stage: build
      script:
        - echo "🏗️ Building Angular app for production"
        - npm run build --configuration=production
      dependencies:
        - install
      artifacts:
        paths:
          - dist/
        expire_in: 1 week
