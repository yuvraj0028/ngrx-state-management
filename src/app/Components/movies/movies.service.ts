import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { rateMovies } from './store/movie.action';

// movie service for movie functionality
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  store = inject(Store);

  // rate movies by id
  rateMovieById(movieId: number, rating: number): void {
    // updating rating using store
    this.store.dispatch(rateMovies({ id: movieId, rating: rating }));
  }
}
