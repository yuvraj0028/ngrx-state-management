import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { RatingBarComponent } from '../rating-bar/rating-bar.component';
import { BarRating } from 'ngx-bar-rating';
import { Movie } from '../Models/Movie.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ID {
  id: number;
}

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
  readonly dialogRef = inject(MatDialogRef<RatingDialogComponent>);
  readonly movieID = inject<number>(MAT_DIALOG_DATA);
  private rating!: number;
  public rateNum: number = 0;

  // setting rating of movie
  setRating(rating: number) {
    this.rateNum = rating;
    this.rating = rating;
  }

  // cancelling rating
  onCancelClick(): void {
    this.dialogRef.close();
  }

  // sending data to parent component
  onSubmitClick(): void {
    if (this.rating) {
      this.dialogRef.close({ id: this.movieID, rating: this.rating });
    }
  }
}
