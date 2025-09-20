import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CounterService } from './counter.service'

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Éditeur de compteur</p>
    <button (click)="dec()">-</button>
    <button (click)="inc()">+</button>
    <button (click)="reset()">Reset</button>
  `
})
export class CounterComponent {
  constructor(private counter: CounterService) {}

  inc() {
    this.counter.inc()
  }

  dec() {
    this.counter.dec()
  }

  reset() {
    this.counter.reset()
  }
}
