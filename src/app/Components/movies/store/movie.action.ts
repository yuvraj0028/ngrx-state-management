import { createAction, props } from '@ngrx/store';

// rate movie action
export const rateMovies = createAction(
  '[Movie] Rate Movies',
  props<{ id: number; rating: number }>()
);
