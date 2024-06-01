import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../shared/models/prodcut.interface';

export const addToCart = createAction(
  '[Cart Component] AddTocart',
  props<{ product: IProduct }>()
);
export const incrementProduct = createAction(
  '[Cart Component] Incrementproduct',
  props<{ productId: number }>()
);
export const decrementProduct = createAction(
  '[Cart Component] Decrementproduct',
  props<{ productId: number }>()
);
export const removeProduct = createAction(
  '[Cart Component] Removeproduct',
  props<{ productId: number }>()
);
