# Test avec gitlab ci-cd
  - scripts
    "test": "ng test",
    "test:ci": "ng test --watch=false --browsers=ChromeHeadlessNoSandbox",

# Activer le coverage tout le temps
  - scripts
    "test": "ng test",
    "coverage": "ng test --no-watch --code-coverage"
    "test:ci": "ng test --watch=false --browsers=ChromeHeadlessNoSandbox",

  - angular.json    

    "test": {
      "builder": "@angular/build:karma",
      "options": {
        "codeCoverage": true,
        "polyfills": [


# Customiser Karma
  https://angular.dev/guide/testing?utm_source=chatgpt.com

  ng generate config karma


  Fichier par defaut
    
    - karma.conf.js
   
      // Karma configuration file, see link for more information
    // https://karma-runner.github.io/1.0/config/configuration-file.html

    module.exports = function (config) {
      config.set({
        basePath: '',
        frameworks: ['jasmine'],
        plugins: [
          require('karma-jasmine'),
          require('karma-chrome-launcher'),
          require('karma-jasmine-html-reporter'),
          require('karma-coverage'),
        ],
        client: {
          jasmine: {
            // you can add configuration options for Jasmine here
            // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
            // for example, you can disable the random execution with `random: false`
            // or set a specific seed with `seed: 4321`
          },
        },
        jasmineHtmlReporter: {
          suppressAll: true // removes the duplicated traces
        },
        coverageReporter: {
          dir: require('path').join(__dirname, './coverage/angular-starter'),
          subdir: '.',
          reporters: [
            { type: 'html' },
            { type: 'text-summary' }
          ]
        },
        reporters: ['progress', 'kjhtml'],
        browsers: ['Chrome'],
        restartOnFileChange: true
      });
    };


# Parametres pour avoir tous les fichiers et leur couverture

    // Karma configuration file
    // https://karma-runner.github.io/1.0/config/configuration-file.html

    const path = require('path');

    module.exports = function (config) {
      config.set({
        basePath: '',
        frameworks: ['jasmine'],
        plugins: [
          require('karma-jasmine'),
          require('karma-chrome-launcher'),
          require('karma-jasmine-html-reporter'),
          require('karma-coverage'),
        ],
        client: {
          jasmine: {}
        },
        jasmineHtmlReporter: {
          suppressAll: true
        },
        coverageReporter: {
          dir: path.join(__dirname, './coverage/angular-starter'),
          subdir: '.',
          reporters: [
            { type: 'html' },          // rapport complet (navigateur)
            { type: 'text-summary' },  // résumé global
            { type: 'text' }           // ← détail par fichier dans le terminal
          ]
        },
        reporters: ['progress', 'kjhtml', 'coverage'],
        browsers: ['ChromeHeadless'],
        restartOnFileChange: true,
        singleRun: true
      });
    };


