npm install --save-dev webpack

Rajouter la progression lors du build


const webpack = require('webpack');

module.exports = {
  // votre configuration Webpack actuelle ici

  plugins: [
    new webpack.ProgressPlugin(),
  ],
};


"build": "webpack --progress",
