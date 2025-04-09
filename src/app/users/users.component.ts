import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.sass'
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  constructor(private user_service: UsersService) { }

  ngOnInit(): void {
    this.user_service.getUsers().subscribe(data => {
      this.users = data;
    }, (error) => {
      console.error('Error fetching users:', error);
    });
  }
}
