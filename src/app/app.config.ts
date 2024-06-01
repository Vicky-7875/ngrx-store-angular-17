import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './states/counter/counter.reducer';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { cartReducer } from './states/cart/cart.reducer';
import { ProductReducer } from './states/product/product.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductEffect } from './states/product/product.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(),
    provideAnimations(),
    provideStore(),
    provideHttpClient(withFetch()),
    provideState({ name: 'cart', reducer: cartReducer }),
    provideState({ name: 'counter', reducer: counterReducer }),
    provideState({ name: 'products', reducer: ProductReducer }),
    provideEffects(ProductEffect),
  ],
};
