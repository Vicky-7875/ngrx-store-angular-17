import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { IProduct } from '../shared/models/prodcut.interface';
import { increment } from '../states/counter/counter.actions';
import { computed } from '@angular/core';
import { calculatePrice } from '../states/cart/cart.reducer';

export interface CartState {
  products: IProduct[];
}

const initialCartState: CartState = {
  products: [],
};

export const CartStore = signalStore(
  { providedIn: 'root' },
  withState(initialCartState),
  withComputed(({ products }) => ({
    totalPrice: computed(() => calculatePrice(products())),
  })),
  withMethods(({ products, ...store }) => ({
    addToCart(product: IProduct) {
      const updatedProduct = [...products(), product];
      patchState(store, { products: updatedProduct });
    },
    removeItem(id: number) {
      const updatedProduct = products().filter((a) => a.id !== id);
      patchState(store, { products: updatedProduct });
    },
    incrementItem(id: number) {
      const updatedProduct = products().map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      patchState(store, { products: updatedProduct });
    },
    decrementItem(id: number,quantity:number) {
      const updatedProduct = products().map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      patchState(store, { products: updatedProduct });
    },
  }))
);
