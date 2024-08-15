import { Component, inject, OnInit } from '@angular/core';
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
export class MoviesComponent implements OnInit {
  movies!: Movie[];

  constructor(private movieService: MoviesService) {}

  // getting demo movies
  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }

  // material dialog
  readonly dialog = inject(MatDialog);

  // open rating dialog
  openRatingDialog(): void {
    const dialogRef = this.dialog.open(RatingDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
