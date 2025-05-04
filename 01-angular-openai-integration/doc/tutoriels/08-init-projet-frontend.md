## ✅ Créer une application Angular 19 avec une page HTML minimaliste

| Étape | Action                                                                                          |
|-------|-------------------------------------------------------------------------------------------------|
| 1     | Supprimer Angular CLI existant : `npm uninstall -g @angular/cli`                               |
| 2     | Installer Angular 19 : `npm install -g @angular/cli@19`                                        |
| 3     | Vérifier l'installation : `ng version` (doit afficher Angular CLI: 19.x.x)                     |
| 4     | Créer le projet : `ng new frontend-angular --defaults --skip-tests`                            |
| 5     | Aller dans le dossier : `cd frontend-angular`                                                  |
| 6     | Modifier `src/app/app.component.html` → insérer le paragraphe                                  |
| 7     | Modifier `src/app/app.component.css` → ajouter style minimaliste                               |
| 8     | Lancer l'application : `ng serve`                                                              |
| 9     | Accéder à l'application dans le navigateur : `http://localhost:4200`                           |

---

### ✍️ `src/app/app.component.html`

```html
<div style="text-align: center;">
  <textarea rows="10" cols="80">
Ridley Scott, c’est l’obsession du cadre parfait au service de mondes inoubliables.
Réalisateur britannique né en 1937, il s’impose comme un architecte du cinéma,
bâtissant des univers visuels puissants, d’Alien à Blade Runner, de Gladiator à The Martian.
  </textarea>
  <br><br>
  <button>openAI</button>
</div>

Modifier app.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'frontend-angular';
}

