import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [],
    templateUrl: './users.component.html',
    styleUrl: './users.component.sass'
})
export class UsersComponent implements OnInit {
  users: string[] = [];
  constructor(private user_service: UsersService) { }

  ngOnInit(): void {
    this.users = this.user_service.getUsers();
  }
}
