
# Site
  https://ionicframework.com/

# Installation
  npm install -g @ionic/cli
  ionic start angular-ionic blank --type=angular

  - Selection du standalone

  cd angular-ionic
  ionic serve

  ionic g service services/movie

# Build
  Infos du build dans   angular.json

    "options": {
    "outputPath": {
      "base": "www",
      "browser": ""
    },


# Exemple de code

  - Home.page.ts

  import { Component } from '@angular/core';

  import { Movie } from '../services/movie';
  import { CommonModule } from '@angular/common';
  import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonList,
    IonItem
  } from '@ionic/angular/standalone';

  @Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    imports: [
      CommonModule,
      IonHeader, 
      IonToolbar, 
      IonTitle, 
      IonContent,
      IonButton,
      IonList,
      IonItem
    ],
  })
  export class HomePage {
    movies: string[] = [];

    constructor(private movie: Movie) {

    }

    load() {
      this.movies = this.movie.getMovies();
    }
  }

  - home.page.html

  <ion-header>
    <ion-toolbar>
      <ion-title>Films</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <ion-button (click)="load()">Charger</ion-button>
    <ion-list>
      <ion-item *ngFor="let m of movies">
        {{ m }}
      </ion-item>
    </ion-list>
  </ion-content>

