import {Component, Input, OnInit} from '@angular/core';
import {TouristSpot} from '../_models/tourist-spot';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  @Input() place: TouristSpot;

  constructor() { }

  ngOnInit() {
  }

}
