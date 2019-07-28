import { AccountService } from './../shared/accounts.service';
import { LogginService } from './../shared/login.service';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LogginService]
})
export class AccountComponent implements OnInit {

  @Input() account: { name: string, status: string };
  @Input() id: number;

  @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  constructor(private logginService: LogginService, private accountService: AccountService) { }

  ngOnInit() {
  }

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    // this.logginService.logStatusChange('A server status has changed: ' + status);
    this.accountService.statusUpdated.emit(status);
  }

}
