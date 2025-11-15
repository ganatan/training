# Concepts

  AAA = Arrange – Act – Assert

  C’est un pattern de structuration pour les tests unitaires.

  Définition
  
  Étape	          Description
  
  Arrange	        Préparer le contexte du test (données, mocks, instance de classe)
  Act	            Exécuter l’action à tester (appel de méthode, événement)
  Assert	        Vérifier le résultat attendu

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


# Application dans le test

  import { TestBed } from '@angular/core/testing'
  import { App } from './app'

  describe('App', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [App],
      }).compileComponents()
    })

    it('should create the app', () => {
      // ARRANGE
      const fixture = TestBed.createComponent(App)

      // ACT
      const app = fixture.componentInstance

      // ASSERT
      expect(app).toBeTruthy()
    })

    it('should render title', () => {
      // ARRANGE
      const fixture = TestBed.createComponent(App)

      // ACT
      fixture.detectChanges()
      const compiled = fixture.nativeElement as HTMLElement

      // ASSERT
      expect(compiled.querySelector('h1')?.textContent).toContain('angular-starter-test')
    })
  })


# Executer un seul test
  Parametres dans package.json

    "test-calculator": "ng test --include='src/app/services/calculator.spec.ts'",
