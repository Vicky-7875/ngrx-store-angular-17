import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../../shared/models/prodcut.interface';
// import { addToCart, incrementProduct } from './cart.action';

import * as CartAction from './cart.action';
export interface CartState {
  products: IProduct[];
  totalPrice?: number;
}

export const initialCartState: CartState = {
  products: [],
  totalPrice: 0,
};

export function calculatePrice(products: IProduct[]) {
  return products.reduce(
    (total, product) => total +( product.price * product.quantity),
    0
  );
}

export const cartReducer = createReducer(
  initialCartState,
  on(CartAction.addToCart, (state, { product }) => {
    const updatedProduct = [...state.products, product];
    return {
      ...state,
      products: updatedProduct,
      totalPrice:calculatePrice(updatedProduct)
    };
  }),
  on(CartAction.incrementProduct, (state, { productId }) => {
    const updatedProduct = state.products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    return {
      ...state,
      products: updatedProduct,
      totalPrice:calculatePrice(updatedProduct)

    };
  }),
  on(CartAction.decrementProduct, (state, { productId }) => {
    const updatedProduct = state.products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    return {
      ...state,
      products: updatedProduct,
      totalPrice:calculatePrice(updatedProduct)

    };
  }),
  on(CartAction.removeProduct, (state, { productId }) => {
    const updatedProduct = state.products.filter(
      (product) => product.id !== productId
    );
    return {
      ...state,
      products: updatedProduct,
      totalPrice:calculatePrice(updatedProduct)

    };
  })
);
