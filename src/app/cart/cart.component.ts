import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { selectCartProductts, selectTotal } from '../states/cart/cart.selector';
import { CommonModule } from '@angular/common';
import {
  decrementProduct,
  incrementProduct,
  removeProduct,
} from '../states/cart/cart.action';
import { CartStore } from '../store/cart.store';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems$ = this.store.select(selectCartProductts);
  totalPrice = this.store.select(selectTotal);
  /**ngrxsingles store  */
  cartStore = inject(CartStore);
  constructor(private store: Store<AppState>) {}

  remove(productId: number) {
    this.store.dispatch(removeProduct({ productId }));
  }
  increment(productId: number) {
    this.store.dispatch(incrementProduct({ productId }));
  }
  decrement(productId: number, quantity: number) {
    if (quantity === 1) {
      this.cartStore.removeItem(productId);
    } else {
      this.cartStore.decrementItem(productId,quantity);
    }
    // this.store.dispatch(decrementProduct({ productId }));
  }
}
