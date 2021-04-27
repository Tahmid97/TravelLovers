
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {NotificationService} from './notification.service';
import {TouristSpot} from '../_models/tourist-spot';
import {HttpClient} from '@angular/common/http';
import {Review} from '../_models/review';
import {User} from '../_models/user';
import {AuthService} from './auth.service';


@Injectable({ providedIn: 'root' })
export class UserService {

  currentUser: User;

  constructor(private notif: NotificationService, private http: HttpClient, authService: AuthService) {
    authService.currentUserValue.subscribe(user => {
      this.currentUser = user;
    });
  }

  search(type, category, city) {

    console.log(category);
    console.log(city);

    if (type === 'TouristSpot') {
      return this.http.get<TouristSpot[]>('http://localhost:8080/searchTouristCity?cat=' + category + '&address=' + city);
    } else {
      return this.http.get<TouristSpot[]>('http://localhost:8080/searchRestCity?cus=' + category + '&address=' + city);
    }
  }


  /*
    Favorites
  */
  getFavorites() {
    // console.log('get favorites');
    console.log('Current user: ' + this.currentUser.user_fname);
    return this.http.get<TouristSpot[]>('http://localhost:8080/searchFav?fname=' + this.currentUser.user_fname);
  }

  addToFavorite(spot: TouristSpot) {
    const id = spot.place_id;
    return this.http.post<TouristSpot>('http://localhost:8080/insertFav?place=5&user=5', spot);
  }

  removeFromFavorite(spot: TouristSpot) {
    return this.http.post<TouristSpot>('', spot);
  }


  /*
    Want to go
  */
  getWantToGo() {
    return this.http.get<TouristSpot[]>('http://localhost:8080/searchWant?fname=' + this.currentUser.user_fname);
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
    return this.http.get<TouristSpot[]>('http://localhost:8080/searchStar?fname=' + this.currentUser.user_fname);
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
    return this.http.get<TouristSpot[]>('http://localhost:8080/searchVisit?fname=' + this.currentUser.user_fname);
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
    return this.http.post<TouristSpot>('http://localhost:8080/insertReview?place=5&user=3&rating=1&recommended=true', spot);
  }


  /*
    User services
  */
  login() {
    // return the users info based on username
  }

  register() {
    return this.http.post<User>('http://localhost:8080/insertUser?id=1&fname=tim&lname=yom&email=manmail@mail.com&gender=male&dob=2005-05-23', '');
  }

  edit() {
    // post request to alter user info by username
  }

  /*
    History
  */
  getSearchHistory() {

  }

  addSearchHistory() {

  }
}
