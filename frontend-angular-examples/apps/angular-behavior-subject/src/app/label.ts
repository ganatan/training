import { Component, OnInit, OnDestroy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CounterService } from './counter.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Valeur actuelle (label) : {{ value }}</p>`
})
export class LabelComponent implements OnInit, OnDestroy {
  value = 0
  private sub?: Subscription

  constructor(private counter: CounterService) {}

  ngOnInit() {
    this.sub = this.counter.count$.subscribe(v => {
      console.log('[LabelComponent] Nouvelle valeur =', v)
      this.value = v
    })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe()
  }
}
