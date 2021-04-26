
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {NotificationService} from './notification.service';
import {TouristSpot} from '../_models/tourist-spot';
import {HttpClient} from '@angular/common/http';
import {Review} from '../_models/review';


@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private notif: NotificationService, private http: HttpClient) {
  }

  getPlaces(): TouristSpot[] {
    const spots: TouristSpot[] = [
      {
        id: '01',
        price: 12,
        number: '1260',
        street: 'Progress st',
        city: 'Blacksburg',
        zip: '20147',
        country: 'USA',
        name: 'Virginia Tech',
        category: 'None',
        favorite: false
      },
      {
        id: '02',
        price: 20,
        number: '1600',
        street: 'Turner st',
        city: 'Blacksburg',
        zip: '20147',
        country: 'USA',
        name: 'Burress Hall',
        category: 'None',
        favorite: true
      }
    ];
    return spots;
  }


  search(type, category, city) {
    return this.http.get<TouristSpot[]>('');
  }


  /*
    Favorites
  */
  getFavorites() {
    return this.http.get<TouristSpot[]>('');
  }

  addToFavorite(spot: TouristSpot) {
    return this.http.post<TouristSpot>('', spot);
  }

  removeFromFavorite(spot: TouristSpot) {
    return this.http.post<TouristSpot>('', spot);
  }


  /*
    Want to go
  */
  getWantToGo() {
    return this.http.get<TouristSpot[]>('');
  }

  addToWantToGo(spot: TouristSpot) {
    return this.http.post<TouristSpot>('', spot);
  }

  removeFromWantToGo(spot: TouristSpot) {
    return this.http.post<TouristSpot>('', spot);
  }

  /*
    Starred
  */
  getStarred() {
    return this.http.get<TouristSpot[]>('');
  }

  addToStarred(spot: TouristSpot) {
    return this.http.post<TouristSpot>('', spot);
  }

  removeFromStarred(spot: TouristSpot) {
    return this.http.post<TouristSpot>('', spot);
  }

  /*
    visited
  */
  getVisited() {
    return this.http.get<TouristSpot[]>('');
  }

  addToVisited(spot: TouristSpot) {
    return this.http.post<TouristSpot>('', spot);
  }

  removeFromVisited(spot: TouristSpot) {
    return this.http.post<TouristSpot>('', spot);
  }

  /*
    Review
  */
  addReview(spot: TouristSpot, review: Review) {
    return this.http.post<TouristSpot>('', spot);
  }


  /*
    User services
  */
  login() {

  }

  register() {

  }

  edit() {

  }
}
