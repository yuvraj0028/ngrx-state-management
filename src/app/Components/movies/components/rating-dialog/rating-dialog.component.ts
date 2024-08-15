import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { RatingBarComponent } from '../rating-bar/rating-bar.component';
import { BarRating } from 'ngx-bar-rating';

@Component({
  selector: 'app-rating-dialog',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatButtonModule,
    RatingBarComponent,
    BarRating,
  ],
  templateUrl: './rating-dialog.component.html',
  styleUrl: './rating-dialog.component.scss',
})
export class RatingDialogComponent {
  // setting rating of movie
  setRating(rating: number) {
    console.log(rating);
  }
}
