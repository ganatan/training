# Liste de pipe
  {{ 1800 | currency:'USD' }}      → $1,800.00
  {{ 0.42 | percent }}            → 42%
  {{ today | date:'short' }}       → 11/09/25, 12:00
  {{ {name:'Danny'} | json }}
  {{ users | slice:0:3 }}
  {{ stream$ | async }}

# Currency

import { CurrencyPipe } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CurrencyPipe],  