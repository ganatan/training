import { Component, OnDestroy } from '@angular/core'
import { CommonModule, AsyncPipe } from '@angular/common'
import { BehaviorSubject, Subscription } from 'rxjs'
import { CounterComponent } from './counter'
import { LabelComponent } from './label'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AsyncPipe, CounterComponent, LabelComponent],
  templateUrl: './app.html'
})
export class App implements OnDestroy {
  counter = new BehaviorSubject<number>(0)
  counter$ = this.counter.asObservable()
  private sub: Subscription

  constructor() {
    this.sub = this.counter$.subscribe(v => console.log('Subscriber A:', v))
  }

  inc() {
    this.counter.next(this.counter.value + 1)
  }

  dec() {
    this.counter.next(this.counter.value - 1)
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
