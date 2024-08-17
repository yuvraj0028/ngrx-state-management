import { Component, inject } from '@angular/core';
import { Movie } from './components/Models/Movie.model';
import { CommonModule } from '@angular/common';
import { MoviesService } from './movies.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RatingBarComponent } from './components/rating-bar/rating-bar.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { RatingDialogComponent } from './components/rating-dialog/rating-dialog.component';
import { Store } from '@ngrx/store';
import { selectMovies } from './store/movie.selector';
import { tap } from 'rxjs';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RatingBarComponent,
    MovieInfoComponent,
    MatDividerModule,
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent {
  constructor(private movieService: MoviesService) {}

  store = inject(Store);
  movies$ = this.store.select(selectMovies);

  // material dialog
  readonly dialog = inject(MatDialog);

  // open rating dialog
  openRatingDialog(movie: Movie): void {
    const dialogRef = this.dialog.open(RatingDialogComponent, {
      data: movie.id,
    });

    // updating rating
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // updating rating using service
        this.movieService.rateMovieById(result.id, result.rating);
      }
    });
  }
}
