import { Observable } from 'rxjs';
import { CanDeactivateGuard } from './../../can-deactivate-guard.service';
import { ServersService } from './../servers.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateGuard {

  server: { id: number, name: string, status: string };

  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serverService: ServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serverService.getServer(1);
    console.log(this.server);

    this.route.queryParams.subscribe((params: Params) => {
      this.allowEdit = params.allowEdit === '1' ? true : false;
    });

    this.serverName = this.server.name;
    this.serverStatus = this.serverStatus;
  }

  onServerUpdate() {
    this.serverService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
  }

  canDeactivate() {
    if (!this.allowEdit) {
      return true;
    }

    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      console.log('Do you want to discard the changes ?');
    } else {
      return true;
    }
  }

}
