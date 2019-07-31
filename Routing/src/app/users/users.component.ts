import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [
    {
      id: 1,
      name: 'Arnaud'
    },
    {
      id: 2,
      name: 'Fabien'
    },
    {
      id: 3,
      name: 'Nadia'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
