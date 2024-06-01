import { Injectable, inject } from '@angular/core';
import { ProductApiService } from '../../shared/services/product-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductAction from './product.action';
import { catchError, map, of, switchMap } from 'rxjs';
@Injectable()
export class ProductEffect {
  private api = inject(ProductApiService);
  actions$ = inject(Actions);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductAction.loadProduct),
      switchMap(() =>
        this.api.getProducts().pipe(
          map((res) => ProductAction.loadProductSuccess({ products: res })),
          catchError((error: { message: string }) =>
            of(
              ProductAction.loadProductFailure({
                errorMessage: 'failed to load products',
              })
            )
          )
        )
      )
    )
  );
}
