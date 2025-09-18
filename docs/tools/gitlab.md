# Creation d'un CI/CD
un monorepo plusieurs projets

Creation à la racine
  .gitlab-ci.yml

  !!!!!!!!!!!!!!!!!!!! liste des stages possibles dans les gitlab-ci enfant
  stages: [install, lint, test, build]
  include:
    - local: 'angular/01-angular-starter-bootstrap/.gitlab-ci.yml'  

# Push des commits
  !!!!!!!
  avoir un package-lock.json    