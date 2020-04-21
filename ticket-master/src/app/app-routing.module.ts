import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AdminsComponent } from './admins/admins.component';
import { TicketsComponent } from './tickets/tickets.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { OpenticketComponent } from './openticket/openticket.component';
import { CloseticketComponent } from './closeticket/closeticket.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'admins', component: AdminsComponent },
  { path: 'closeticket', component: CloseticketComponent },
  { path: 'openticket', component: OpenticketComponent },
  { path: 'tickets', component: TicketsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
