import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import Ticket from '../models/ticket';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-mytickets',
  templateUrl: './mytickets.component.html',
  styleUrls: ['./mytickets.component.css']
})
export class MyticketsComponent implements OnInit {
  tickets: Ticket[] = [];
  error: string | undefined;
  createNoteForm = this.formBuilder.group({
    text: ['', Validators.required]
  });
  constructor(
    private ticketsApi: ApiService,
    private formBuilder: FormBuilder,
    private cookieServ: CookieService
  ) { }
  ngOnInit(): void {

    this.getTickets();
  }
  getTickets() {
    return this.ticketsApi.getTickets()
      .then(
        tickets => {
          let fname = this.cookieServ.get('cookieFirstName');
          let lname = this.cookieServ.get('cookieLastName');
          let fullname = fname + " " + lname;
          this.tickets = tickets.filter(tickets => tickets.userRequesterName == fullname);





          this.resetError();
        },
        error => {
          this.handleError(error);
        } 
      );
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.error = `An error occurred: ${error.error.message}`;
    } else {
      this.error = `Backend returned code ${error.status}, body was: ${error.error}`;
    }
  }
  resetError() {
    this.error = undefined;
  }
}
