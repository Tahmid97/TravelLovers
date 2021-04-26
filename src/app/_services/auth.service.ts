import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../_models/user';

import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  // Added HttpClient
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

    // this is used by app.component.ts
    // currentUser is turned into an Observable that will allow other parts of the app to subscribe and get notified when currentUserSubject changes.
    this.currentUser = this.currentUserSubject.asObservable();
  }


  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<any> {
    // console.log('In login');
    // Read more here: https://angular.io/guide/http
    return this.http.get<User[]>(`http://localhost:8080/getUser?user=` + username)
      .pipe(map(user => {
        // console.log(user);
        // login successful if there's a jwt token in the response
        if (user[0]) {
          console.log(user[0]);
          localStorage.setItem('currentUser', JSON.stringify(user[0]));
          this.currentUserSubject.next(user[0]);
        }

        return user[0];
      }));
  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // notify all subscribers that user has logged out.
    this.currentUserSubject.next(null);
  }


}
