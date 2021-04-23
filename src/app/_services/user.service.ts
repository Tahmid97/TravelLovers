
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {NotificationService} from './notification.service';
import {TouristSpot} from '../_models/tourist-spot';




@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private notif: NotificationService) {
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


  deleteActivity(createdDate: Date) {
    // identify the object in the array of objects.
    /* Delete Activity has been handled in home.component.ts using event emitter, I was not sure why I would need to handle the
    * delete here because the parecords array in this class is supposed to be persistent and load the 4 parecords on reload.*/
  }


  private randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

}
