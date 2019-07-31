import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { ServersService } from './../servers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serverService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.data.subscribe((data: Data) => {
      this.server = data.server;
    });

    // const id = +this.route.snapshot.params.id;
    // this.server = this.serverService.getServer(id);
    // console.log(this.server);

    // this.route.params.subscribe((parm: Params) => {
    //   this.server = this.serverService.getServer(+parm.id);
    // });

    // this.route.params.subscribe((e) => {
    //   this.server = this.serverService.getServer(e['id']);
    // });
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

}
