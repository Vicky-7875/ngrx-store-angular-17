import { CartState } from './cart/cart.reducer';
import { CounterState } from './counter/counter.reducer';
import { ProductState } from './product/product.reducer';

export interface AppState {
  counter: CounterState;
  cart: CartState;
  product: ProductState;
}
