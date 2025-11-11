
# angular-routing

  ng g c pages/home
  ng g c pages/about
  ng g c pages/contact

  Ajout de RouterLink dans app.ts

# Improve Code

  - app.routes.ts

  import { Routes } from '@angular/router';
  import { Home } from './pages/home/home';
  import { About } from './pages/about/about';
  import { Contact } from './pages/contact/contact';

  export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: '**', redirectTo: '' }
  ];

  - app.html

    <h1>angular-routing</h1>

    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/about">About</a></li>
      <li><a routerLink="/contact">Contact</a></li>
    </ul>

    <router-outlet></router-outlet>

  - app.ts

    import { Component, signal } from '@angular/core';
    import { RouterLink, RouterOutlet } from '@angular/router';

    @Component({
      selector: 'app-root',
      imports: [
        RouterLink,
        RouterOutlet
        ],
      templateUrl: './app.html',
      styleUrl: './app.css'
    })
    export class App {
      protected readonly title = signal('angular-starter');

    }

  # Rajout de ActivatedRoute
  - app.spec.ts

    import { TestBed } from '@angular/core/testing';
    import { App } from './app';

    import { ActivatedRoute } from '@angular/router';

    describe('App', () => {
      beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [App],
          providers: [
            {
              provide: ActivatedRoute,
              useValue: {}
            }
          ]
        }).compileComponents();
      });

      it('should create the app', () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });

      it('should render title', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('angular-routing');
      });
    });



        