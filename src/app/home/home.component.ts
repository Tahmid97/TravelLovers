import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {UserService} from '../_services/user.service';
import {TouristSpot} from '../_models/tourist-spot';


@Component({
  selector: 'app-main-view',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tabs = ['Search', 'Favorite', 'Want to Go', 'Starred', 'Visited'];
  selected = new FormControl(0);

  search = 'TouristSpot';
  type = '';

  places: TouristSpot[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.places = this.userService.getPlaces();
  }
}
