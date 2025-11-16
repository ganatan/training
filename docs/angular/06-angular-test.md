# Concepts

  AAA = Arrange – Act – Assert

  C’est un pattern de structuration pour les tests unitaires.

  Définition
  
  Étape	          Description
  
  Arrange	        Préparer le contexte du test (données, mocks, instance de classe)
  Act	            Exécuter l’action à tester (appel de méthode, événement)
  Assert	        Vérifier le résultat attendu

# Karma
  ng generate config karma

# Coverage
    "coverage": "ng test --no-watch --code-coverage",

    "coverage-open": "npm run coverage && start coverage/angular-starter/index.html"

# Executer un seul test
  Parametres dans package.json

    "test:calculator": "ng test --include='src/app/services/calculator.spec.ts'",

    "test:component-basic": "ng test --include='src/app/components/component-basic/component-basic.spec.ts'",


# Type de Tests

  1. Tests de Service

    → Tester la logique métier
    → Tester les appels HTTP
    → Tester les dépendances mockées

    Mots-clés
      TestBed.inject
      HttpClientTestingModule
      HttpTestingController
      expectOne, flush
      spyOn
      of, throwError (RxJS)

  2. Tests de Component

    → Tester le DOM
    → Tester les interactions
    → Tester Input/Output
    → Tester l’async + Observables

    Mots-clés
      ComponentFixture
      fixture.detectChanges()
      nativeElement.querySelector
      button.click()
      @Input()
      @Output() + EventEmitter
      fakeAsync, waitForAsync, tick()
      async pipe

  3. Tests de Directive

    → Tester le comportement appliqué à un élément hôte
    → Tester l’ajout de classes, styles, écouteurs d’événements

    Mots-clés
      composant hôte (host component)
      Directive
      ElementRef
      Renderer2
      évènements : mouseenter, keyup, etc.
      fixture.detectChanges()

  4. Tests de Pipe

    → Le plus simple
    → Tester que la transformation renvoie la bonne valeur

    Mots-clés
      instanciation directe : new MyPipe()
      méthode transform
      cas simples / cas limites

  ✔ Résumé final en une phrase

    Les tests Angular se divisent en 4 blocs : Service, Component, Directive et Pipe.
    Chaque bloc a ses mots clés :
      Service → TestBed, HTTP, spyOn
      Component → Fixture, detectChanges, Input/Output
      Directive → Host component, ElementRef, events
      Pipe → transform()


