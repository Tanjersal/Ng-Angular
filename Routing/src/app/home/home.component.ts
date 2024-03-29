import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoad() {
    this.router.navigate(['/servers', 1, 'edit'], { queryParams: { allowEdit: 1 }, fragment: 'loading' });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
