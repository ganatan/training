
# Installation
  npm uninstall -g @angular/cli
  npm install -g @angular/cli

# Creation Starter
  ng new angular-starter

# Check dependencies
  npm list --depth=0
  npm outdated

# Rajout du coverage
  "coverage": "ng test --no-watch --code-coverage"

# Rajout des Routes
  ng generate component features/home
  ng generate component features/contact
  ng generate component features/about