import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  text = 'User Page';
  users: any[] = [];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  ngOnInit() {
  }

}
