import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import Ticket from '../models/ticket';
import floatingTicket from '../floatingTicket';
import { Location } from '@angular/common';
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
        }
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

  


}
