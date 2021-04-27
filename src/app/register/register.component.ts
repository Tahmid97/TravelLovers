import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../_services/notification.service';
import {AuthService} from '../_services/auth.service';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: string;
  lastName: string;
  username: number;
  email: string;
  gender: string;
  dob: Date;

  constructor(private notif: NotificationService, private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    this.userService.register(this.username, this.firstName, this.lastName, this.email, this.gender, this.dob).subscribe(result => {
      this.notif.showNotif('User registration successful', 'dismiss');
    }, error => {
      this.notif.showNotif(error.toString(), 'warning');
    });
  }

}
