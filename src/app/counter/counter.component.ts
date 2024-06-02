import { Component, computed, effect, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { selectCount } from '../states/counter/counter.selector';
import { AsyncPipe } from '@angular/common';
import { decrement, increment, reset } from '../states/counter/counter.actions';
import { CounterStore } from '../store/counter.store';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  providers:[CounterStore]
})
export class CounterComponent {
  /**signal */
  // count = signal(0);
  // double =computed(()=>this.count() *2)

  /**ngrx signals */
  counterStore = inject(CounterStore);
  

  /**
   *ngrx state management
   */
  count$: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
    // effect(()=>{
    //   console.log(` the current value of count is ${this.count()}`);

    // })
  }

  /**ngrx    and signal */
  // increment() {
  //   // this.store.dispatch(increment());
  //   // this.count.update((num) => num + 1);
  // }

  // decrement() {
  //   // this.store.dispatch(decrement());
  //   // this.count.update((num) => num - 1);
  // }

  // reset() {
  //   // this.store.dispatch(reset());
  //   // this.count.set(0)
  // }
}
