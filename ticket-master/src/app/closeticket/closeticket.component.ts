import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import Ticket from '../models/ticket';
import floatingTicket from '../floatingTicket';
@Component({
  selector: 'app-closeticket',
  templateUrl: './closeticket.component.html',
  styleUrls: ['./closeticket.component.css']
})
export class CloseticketComponent implements OnInit {
  quantity = new FormControl('');

  tickets: Ticket;

  intholder = 1;




  

  constructor(
    private builder: FormBuilder,
    private cookieService: CookieService,
    public usersApi: ApiService
  ) { }
  ngOnInit(): void {


  }
  getCookie(){
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


  closeTicket() {
    this.usersApi.closeTicket(this.intholder, this.tickets);
  }


  onClick() {


    return this.usersApi.getTicket(this.intholder)
      .then(
        ticket => {
          this.tickets = ticket;
        }
    );

    this.tickets.title = "";
    this.tickets.details = "";
    this.tickets.userRequesterName = "";


    





    



    //console.log(newTicket1);

    //console.log(this.usersApi.getTicket(this.intholder););
  }
}
