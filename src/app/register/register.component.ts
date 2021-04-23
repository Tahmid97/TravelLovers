import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../_services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;

  constructor(private notif: NotificationService) { }

  ngOnInit() {
  }

  register() {
    this.notif.notImplementedWarning('Registration');
  }

}
