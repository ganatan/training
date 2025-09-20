# Création d'une application Angular mono repo
  https://nx.dev/angular-tutorial/1-code-generation
  
  npx create-nx-workspace
  examples-frontend
  
  Creer des appli dans apps
  
  npx nx g @nx/angular:app apps/angular-behavior-subject
  npx nx g @nx/angular:app apps/angular-signals
  npx nx g @nx/angular:app apps/angular-component
  npx nx g @nx/angular:app apps/angular-class

  Scripts
    "start-behavior-subject": "nx serve angular-behavior-subject",
    "lint-behavior-subject": "nx lint angular-behavior-subject",
    "test-behavior-subject": "nx test angular-behavior-subject",
    "build-behavior-subject": "nx build angular-behavior-subject",


