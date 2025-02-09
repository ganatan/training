# Babel

# Installation
  npm install --save-dev babel-jest @babel/core @babel/preset-env
  
creer un fichier babel.config.js

  export default {
    presets: ["@babel/preset-env"]
  };


creer un fichier 
.babelrc

modifier 

jest.config.mjs

!!!!!!!!!!!!!!!!!!!!!!!!! mais ce n'est pas sur

export default {
  testEnvironment: "node",
  clearMocks: true, 
  collectCoverage: true,
  coverageProvider: "v8",
  transform: {
    "^.+\\.js$": "babel-jest"
  }
};

