import { Component, Input, OnInit } from '@angular/core';
import { BarRating } from 'ngx-bar-rating';
import { Movie } from '../Models/Movie.model';

@Component({
  selector: 'app-rating-bar',
  standalone: true,

  imports: [BarRating],
  templateUrl: './rating-bar.component.html',
  styleUrl: './rating-bar.component.scss',
})
export class RatingBarComponent implements OnInit {
  @Input() movie!: Movie;

  rating: number = 0;

  // calculating rating
  calculateRating() {
    if (this.movie.rating.length > 0) {
      this.rating =
        this.movie.rating.reduce((a: number, b: number) => a + b) /
        this.movie.rating.length;
    }
  }

  ngOnInit(): void {
    this.calculateRating();
  }
}
