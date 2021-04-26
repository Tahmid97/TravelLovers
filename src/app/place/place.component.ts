import {Component, Input, OnInit} from '@angular/core';
import {TouristSpot} from '../_models/tourist-spot';
import {ReviewComponent} from '../review/review.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  @Input() place: TouristSpot;
  @Input() tab: number;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ReviewComponent, {
      width: '710px',
      data: {
        title: this.place.name,
        description: '',
        label: null,
        points: 1,
        dueDate: null
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('In Home component');
      console.log(result);
    });
  }

}
