import { Routes } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component'
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, },

  {
    path: 'cities',
    loadComponent: () => import('./modules/features/city/item.component')
      .then(mod => mod.ItemComponent)
  },
  {
    path: 'cities/:id',
    loadComponent: () => import('./modules/features/city-form/item.component')
      .then(mod => mod.ItemComponent)
  },

  {
    path: 'professions',
    loadComponent: () => import('./modules/features/profession/item.component')
      .then(mod => mod.ItemComponent)
  },
  {
    path: 'professions/:id',
    loadComponent: () => import('./modules/features/profession-form/item.component')
      .then(mod => mod.ItemComponent)
  },

  {
    path: 'continents',
    loadComponent: () => import('./modules/features/continent/item.component')
      .then(mod => mod.ItemComponent)
  },
  {
    path: 'continents/:id',
    loadComponent: () => import('./modules/features/continent-form/item.component')
      .then(mod => mod.ItemComponent)
  },

  {
    path: 'bootstrap',
    loadChildren: () => import(`./modules/tutorials/example-bootstrap/tutorial.routes`)
      .then(routes => routes.routes)
  },

  {
    path: 'login',
    loadComponent: () => import(`./modules/general/login/login.component`)
      .then(mod => mod.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import(`./modules/general/signup/signup.component`)
      .then(mod => mod.SignupComponent)
  },

  {
    path: 'contact',
    loadChildren: () => import(`./modules/general/contact/contact.routes`)
      .then(routes => routes.routes)
  },

  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.routes')
      .then(routes => routes.routes)
  },

  { path: '**', component: NotFoundComponent }
];