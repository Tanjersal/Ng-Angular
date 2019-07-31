import { ServerResolver } from './servers/servers-resolver.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivateChild } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users', component: UsersComponent, children:
      [
        { path: ':id/:name', component: UserComponent }
      ]
  },
  {
    // path: 'servers', canActivate: [AuthGuard], component: ServersComponent, children:
    path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children:
      [
        { path: ':id/edit', canDeactivate: [CanDeactivateGuard], component: EditServerComponent },
        { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
