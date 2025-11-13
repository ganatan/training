# Concept
  À quoi ça sert ?
    trackBy améliore les performances de *ngFor :
    Angular identifie chaque élément avec une clé unique
    cela évite de reconstruire tout le DOM quand la liste change

    seuls les éléments réellement modifiés sont re-rendus

  Sans trackBy :
    Angular recrée tous les éléments DOM si le tableau est remplacé par une nouvelle référence, même si les valeurs sont identiques.

# Installation
  import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-root',
    imports: [
      CommonModule
    ],
    templateUrl: './app.html',
    styleUrl: './app.css'
  })


# Code ngFor sans trackby

  <li *ngFor="let movie of movies; trackBy: trackId">
    {{ movie.title }}
  </li>

# Code ngFor with trackby

  <h2>Version ngFor Items with trackBy</h2>
  <ul>
    <li *ngFor="let item of items; trackBy: trackItem">
      {{ item }}
    </li>
  </ul>

  trackItem(index: number, item: string) {
    return item;
  }


# Code for

<ul>
  @for (item of items; track item) {
    <li>{{ item }}</li>
  }
</ul>