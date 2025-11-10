# Principes

  https://material.angular.dev/guide/getting-started

# Installation Starter
  npm uninstall -g @angular/cli
  npm install -g @angular/cli
  ng version
  ng new angular-starter

# Installation Angular Material
  ng add @angular/material

  - Rajout des dependances
    "@angular/cdk": "^20.2.8",
    "@angular/material": "^20.2.8",

  - Par defaut mise en place SCSS

  - Rajout SCSS dans angular.json
      "styles": [
      "src/custom-theme.scss",
      "src/styles.css"
    ]


# Installation Angular Material 19
  npx @angular/cli@19 new angular-material-19 --routing --style=scss
  cd angular-material-19
  ng add @angular/material@19
  cd ..


  npx @angular/cli@20 new angular-material-20 --routing --style=scss
  cd angular-material-20
  ng add @angular/material@20
  cd ..