import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

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

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
