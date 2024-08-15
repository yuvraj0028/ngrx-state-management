import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesComponent } from './Components/movies/movies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'movie-rating-state-management';
}
