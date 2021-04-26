import {Component, Input, OnInit} from '@angular/core';
import {TouristSpot} from '../_models/tourist-spot';
import {ReviewComponent} from '../review/review.component';
import {MatDialog} from '@angular/material';
import {UserService} from '../_services/user.service';
import {NotificationService} from '../_services/notification.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  @Input() place: TouristSpot;
  @Input() tab: number;

  constructor(public dialog: MatDialog, private userService: UserService, private notif: NotificationService) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ReviewComponent, {
      width: '710px',
      data: {
        title: this.place.place_name,
        text: '',
        rating: null,
        recommended: null
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      const review = {
        text: result.text,
        rating: result.rating,
        recommended: result.recommended
      };

      this.userService.addReview(this.place, review).subscribe(response => {
        this.notif.showNotif('Review added for ' + this.place.place_name, 'dismiss');
      });
      console.log('In Home component');
      console.log(result);
    });
  }

  // ==============================================================================================

  addFavorite() {
    this.userService.addToFavorite(this.place).subscribe(result => {
      this.notif.showNotif('Added ' + result.place_name + ' to favorites', 'dismiss');
    }, error => {
      this.notif.showNotif(error.toString(), 'warning');
    });
  }

  removeFavorite() {
    this.userService.removeFromFavorite(this.place).subscribe(result => {
      this.notif.showNotif('Removed ' + result.place_name + ' from favorites', 'dismiss');
    }, error => {
      this.notif.showNotif(error.toString(), 'warning');
    });
  }

  // ==============================================================================================

  addWantToGo() {
    this.userService.addToWantToGo(this.place).subscribe(result => {
      this.notif.showNotif('Added ' + result.place_name + ' to Want To Go', 'dismiss');
    }, error => {
      this.notif.showNotif(error.toString(), 'warning');
    });
  }

  removeWantToGo() {
    this.userService.removeFromWantToGo(this.place).subscribe(result => {
      this.notif.showNotif('Removed ' + result.place_name + ' from Want To Go', 'dismiss');
    }, error => {
      this.notif.showNotif(error.toString(), 'warning');
    });
  }

  // ==============================================================================================

  addStarred() {
    this.userService.addToStarred(this.place).subscribe(result => {
      this.notif.showNotif('Added ' + result.place_name + ' to starred', 'dismiss');
    }, error => {
      this.notif.showNotif(error.toString(), 'warning');
    });
  }

  removeStarred() {
    this.userService.removeFromStarred(this.place).subscribe(result => {
      this.notif.showNotif('Removed ' + result.place_name + ' from starred', 'dismiss');
    }, error => {
      this.notif.showNotif(error.toString(), 'warning');
    });
  }

  // ==============================================================================================

  addVisited() {
    this.userService.addToVisited(this.place).subscribe(result => {
      this.notif.showNotif('Added ' + result.place_name + ' to visited', 'dismiss');
    }, error => {
      this.notif.showNotif(error.toString(), 'warning');
    });
  }

  removeVisited() {
    this.userService.removeFromVisited(this.place).subscribe(result => {
      this.notif.showNotif('Removed ' + result.place_name + ' from visited', 'dismiss');
    }, error => {
      this.notif.showNotif(error.toString(), 'warning');
    });
  }

}
