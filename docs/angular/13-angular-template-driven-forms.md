
# Installation
  Template-driven forms = formulaires pilotés par le template.
  
  [(ngModel)] est le binding bidirectionnel entre l’input et une propriété du composant.

# Exemple
  <input [(ngModel)]="name">

  - Rajout FormsModule

  import { FormsModule } from '@angular/forms';

  @Component({
    selector: 'app-root',
    imports: [
      RouterOutlet,
      FormsModule
    ],
    templateUrl: './app.html',
    styleUrl: './app.css'
  })
