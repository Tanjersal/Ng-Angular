import { AccountService } from './shared/accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountService]
})
export class AppComponent implements OnInit {
  title = 'Services';

  accounts: { name: string, status: string }[] = []; // empty arrays of object name and status

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
