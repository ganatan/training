import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class CounterService {
  private readonly countSubject = new BehaviorSubject<number>(0)
  readonly count$ = this.countSubject.asObservable()

  inc(): void {
    this.countSubject.next(this.countSubject.value + 1)
  }

  dec(): void {
    this.countSubject.next(this.countSubject.value - 1)
  }

  reset(): void {
    this.countSubject.next(0)
  }
}
