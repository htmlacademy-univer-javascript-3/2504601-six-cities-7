import {Review} from '../types/review';

export const reviews: Review[] = [
  {
    id: '1',
    user: {name: 'Max', avatarUrl: 'img/avatar-max.jpg'},
    rating: 4,
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24',
  },
  {
    id: '2',
    user: {name: 'Angelina', avatarUrl: 'img/avatar-angelina.jpg'},
    rating: 5,
    comment: 'Great location, very friendly host. Would definitely stay here again.',
    date: '2020-06-15',
  },
  {
    id: '3',
    user: {name: 'Max', avatarUrl: 'img/avatar-max.jpg'},
    rating: 3,
    comment: 'Nice place, but a bit noisy in the evenings.',
    date: '2021-09-10',
  },
];
