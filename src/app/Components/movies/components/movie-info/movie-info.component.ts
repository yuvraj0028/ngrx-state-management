import { Component, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { Movie } from '../Models/Movie.model';

@Component({
  selector: 'app-movie-info',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './movie-info.component.html',
  styleUrl: './movie-info.component.scss',
})
export class MovieInfoComponent {
  // getting movie info
  @Input() movie!: Movie;
}
