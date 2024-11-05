
# Angular Standalone

## Installation 

```bash
# Generate the image component
ng generate component image
```

---

## Source Code

### app.component.html

```html
<!-- app.component.html -->
<app-image></app-image>
```

### app.component.ts

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageComponent } from './image/image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-starter';
}
```
