import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';
import { CartState } from './cart.reducer';

export const selectCartState = (state: AppState) => state.cart;

export const selectCartProductts = createSelector(
  selectCartState,
  (state: CartState) => state.products
);

export const selectTotal = createSelector(
  selectCartState,
  (state: CartState) => state.totalPrice
);
