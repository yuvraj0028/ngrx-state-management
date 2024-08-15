import { Injectable } from '@angular/core';

// movie service for movie functionality
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor() {}

  // demo data to render UI
  getMovies() {
    return [
      {
        id: 1,
        name: 'The Batman',
        imageUrl:
          'https://i.pinimg.com/originals/d7/25/a9/d725a9b969c231f6964fb431156f4c87.jpg',
        rating: [],
        lang: 'English',
        length: '2h 32min',
      },
      {
        id: 2,
        name: 'DeadPool',
        imageUrl:
          'https://data1.ibtimes.co.in/en/full/598988/deadpool-one-most-successful-superhero-movies-all-time.jpg',
        rating: [],
        lang: 'English',
        length: '3h 01min',
      },
      {
        id: 3,
        name: 'ScarFace',
        imageUrl:
          'https://posterspy.com/wp-content/uploads/2019/11/scarface_preview.jpg',
        rating: [],
        lang: 'English',
        length: '2h 10min',
      },
      {
        id: 4,
        name: 'The Godfather',
        imageUrl:
          'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        rating: [],
        lang: 'English',
        length: '3h 10min',
      },
      {
        id: 5,
        name: 'Dumb And Dumber',
        imageUrl:
          'https://image.tmdb.org/t/p/original/A5HCmQrRbj2FECfjNldoKyX1Qbg.jpg',
        rating: [],
        lang: 'English',
        length: '2h',
      },
    ];
  }
}
