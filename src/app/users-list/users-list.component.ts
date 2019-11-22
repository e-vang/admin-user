import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: any;

  constructor( private userService: UserService,
    private router: Router) { }

  ngOnInit() {
this.getUsers();
  }


  getUsers() {

    this.users = this.userService.getUsers();

  }

  editUser( idx: number ){
    this.router.navigate( ['/edit', idx] );
  }

  addUser( ){
    this.router.navigate( ['/add'] );
  }

}
