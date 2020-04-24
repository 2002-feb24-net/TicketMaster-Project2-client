import { Component, OnInit } from '@angular/core';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  faTicketAlt = faTicketAlt;
  lastName = this.cookieService.get('cookieLastName');
  supportLevel = this.cookieService.get('cookieSupportLevel');
  intsupportLevel = parseInt(this.supportLevel);
  constructor(private cookieService: CookieService) { }
  ngOnInit(): void {
    console.warn(this.intsupportLevel);
  }

}
