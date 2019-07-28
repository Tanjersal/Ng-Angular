import { LogginService } from './login.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'Active'
    },
    {
      name: 'Testing Account',
      status: 'Inactive'
    },
    {
      name: 'Admin Account',
      status: 'Unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private logginService: LogginService) { }

  addAccount(newName: string, newStatus: string) {
    this.accounts.push({ name: newName, status: newStatus });
    this.logginService.logStatusChange(status);
  }

  updateAccount(id: number, status: string) {
    this.accounts[id].status = status;
    this.logginService.logStatusChange(status);
  }
}
