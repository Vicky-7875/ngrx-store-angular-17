import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './states/app.state';
import { selectCount } from './states/counter/counter.selector';
import { ProductsComponent } from './products/products.component';
import { IProduct } from './shared/models/prodcut.interface';
import { selectCartProductts } from './states/cart/cart.selector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    CounterComponent,
    ProductsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-material-tailwind-boilerplate';

  count$: Observable<number>;
  products$: Observable<IProduct[]>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
    this.products$ = this.store.select(selectCartProductts);
  }
}
