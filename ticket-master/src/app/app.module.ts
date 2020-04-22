import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { TicketsComponent } from './tickets/tickets.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
import { AdminsComponent } from './admins/admins.component';
import { OpenticketComponent } from './openticket/openticket.component';
import { CloseticketComponent } from './closeticket/closeticket.component';
import { AccountComponent } from './account/account.component';
import { UpdateticketComponent } from './updateticket/updateticket.component';
import { SearchticketsComponent } from './searchtickets/searchtickets.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    CookieService,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    TicketsComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminsComponent,
    OpenticketComponent,
    CloseticketComponent,
    AccountComponent,
    UpdateticketComponent,
    SearchticketsComponent,
    LogoutComponent,
    UpdateComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
