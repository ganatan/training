# Installation
  npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env


  Creer un fichier webpack.config.js

    import path from "path";

    export default {
      entry: "./src/app.js",
      output: {
        path: path.resolve("dist"),
        filename: "bundle.js"
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      },
      target: "node",
      mode: "production"
    };


    Rajouter un script

      "build": "webpack"

  Des erreurs sont generes

  Rajouter cette info dans la config
    experiments: {
      outputModule: true
    },

  Rajouter ces scripts

    "build": "webpack --mode production",
    "serve": "node dist/bundle.js"


  Rajouter dans eslint
  dans le fichier eslint.config.js

      {
        ignores: ['dist/**'],
      },
