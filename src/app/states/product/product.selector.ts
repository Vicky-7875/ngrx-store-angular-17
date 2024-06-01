import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

export const selectProductFeature =
  createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
  selectProductFeature,
  (state: ProductState) => state.products
);

export const selectProductError = createSelector(
  selectProductFeature,
  (state: ProductState) => state.error
);
