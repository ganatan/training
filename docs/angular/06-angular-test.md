# Concepts

  AAA = Arrange – Act – Assert

  C’est un pattern de structuration pour les tests unitaires.

  Définition
  
  Étape	          Description
  
  Arrange	        Préparer le contexte du test (données, mocks, instance de classe)
  Act	            Exécuter l’action à tester (appel de méthode, événement)
  Assert	        Vérifier le résultat attendu


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
