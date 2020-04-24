import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import Ticket from '../models/ticket';
import floatingTicket from '../floatingTicket';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-reassignticket',
  templateUrl: './reassignticket.component.html',
  styleUrls: ['./reassignticket.component.css']
})
export class ReassignticketComponent implements OnInit {
  quantity = new FormControl('');
  quantity2 = new FormControl('');
  selectedAdmin: string = "";

  tickets: Ticket;
  intholder: number;
  intholder2: number;
  error: string;
  temptitle: string;
  tempdetails: string;
  tempuserRequesterName: string;
  tempAdminAssignedName: string;
  tempStatus: string;

  constructor(
    private builder: FormBuilder,
    private cookieService: CookieService,
    public usersApi: ApiService,
    private location: Location
  ) { }
  ngOnInit(): void {

  }
  getCookie() {
    this.cookieService.get('cookieEmail');
    this.cookieService.get('cookiePassword');
  }

  getTicket() {
    return this.usersApi.getTicket(this.intholder)
      .then(
        ticket => {
          this.tickets = ticket;
        }
      );
  }

  reassignTicket() {
    this.usersApi.reassignTicket(this.intholder, this.intholder2, this.tickets);
    this.location.back();
  }

  onClick() {
    return this.usersApi.getTicket(this.intholder)
      .then(
        ticket => {
          this.tickets = ticket;
          this.resetError();
          this.temptitle = ticket.title;
          this.tempdetails = ticket.details;
          this.tempuserRequesterName = ticket.userRequesterName;
          this.tempAdminAssignedName = ticket.adminAssignedName;
          this.tempStatus = ticket.completed;
        },

        error => {
          this.handleError(error);
          this.temptitle = "";
          this.tempdetails = "";
          this.tempuserRequesterName = "";
          this.tempAdminAssignedName = "";
          this.tempStatus = "";
        } // error
      );
  }



  onClick2() {



    var admin1 = "Paul Stewart";
    var admin2 = "Morgan Hay";
    var admin3 = "Shawn Halcomb"
    if (this.intholder2 == 1) {
      this.selectedAdmin = admin1;
    }
    if (this.intholder2 == 2) {
      this.selectedAdmin = admin2;
    }
    if (this.intholder2 == 3) {
      this.selectedAdmin = admin3;
    }
  }

  
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      this.error = `An error occurred: ${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      this.error = `${error.error}`;
    }
    // return an observable with a user-facing error message
    // this.error = 'Something bad happened; please try again later.';
  }

  resetError() {
    this.error = undefined;
  }

}
