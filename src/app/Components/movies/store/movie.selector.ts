import { createSelector } from '@ngrx/store';

// select movies
export const selectMovies = createSelector(
  (state: any) => state.movies,
  (movies) => movies.movies
);
