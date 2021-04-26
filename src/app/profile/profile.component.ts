import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../_services/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;

  constructor(private notif: NotificationService) { }

  ngOnInit() {
  }

  updateProfile() {
    this.notif.notImplementedWarning('Registration');
  }

}
