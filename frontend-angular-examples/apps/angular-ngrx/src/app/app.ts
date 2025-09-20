import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './store/counter.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-ngrx';

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = this.store.select('count');
  }

  inc() {
    this.store.dispatch(increment());
  }

  dec() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}


// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';

// @Component({
//   imports: [RouterModule],
//   selector: 'app-root',
//   templateUrl: './app.html',
//   styleUrl: './app.css',
// })
// export class App {
//   protected title = 'angular-ngrx';
// }
