import { Component, signal, computed, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = signal(0);
  double = computed(() => this.count() * 2);

  inc() { this.count.update(v => v + 10); }
  dec() { this.count.update(v => v - 10); }
  reset() { this.count.set(0); }

  constructor() {
    console.log('00000000001:' + this.count)
    effect(() => { this.double(); });
  }
}

