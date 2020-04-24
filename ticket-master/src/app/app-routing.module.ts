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
import { AccountComponent } from './account/account.component';
import { UpdateticketComponent } from './updateticket/updateticket.component';
import { SearchticketsComponent } from './searchtickets/searchtickets.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateComponent } from './update/update.component';
import { AdminportalComponent } from './adminportal/adminportal.component';
import { MyticketsComponent } from './mytickets/mytickets.component';
import { AssignedticketsComponent } from './assignedtickets/assignedtickets.component';
import { ReassignticketComponent } from './reassignticket/reassignticket.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ChangeadminpasswordComponent } from './changeadminpassword/changeadminpassword.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'admins', component: AdminsComponent },
  { path: 'closeticket', component: CloseticketComponent },
  { path: 'openticket', component: OpenticketComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'alltickets', component: SearchticketsComponent },
  { path: 'updateticket', component: UpdateticketComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'adminportal', component: AdminportalComponent },
  { path: 'mytickets', component: MyticketsComponent },
  { path: 'assignedtickets', component: AssignedticketsComponent },
  { path: 'reassignticket', component: ReassignticketComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'adminportal/changeadminpassword', component: ChangeadminpasswordComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
