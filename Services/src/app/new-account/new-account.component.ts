import { AccountService } from './../shared/accounts.service';
import { LogginService } from './../shared/login.service';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LogginService]
})
export class NewAccountComponent implements OnInit {

  // @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(private logginService: LogginService, private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe((status: string) => alert('new status: ' + status));
  }

  ngOnInit() {
  }

  onCreateAccount(accountName: string, statusCode: string) {
    this.accountService.addAccount(accountName, statusCode);
    this.logginService.logStatusChange(statusCode);
  }

}
