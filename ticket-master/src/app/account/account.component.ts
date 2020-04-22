import { Component, OnInit } from '@angular/core';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  faCogs = faCogs;
  email = this.cookieService.get('cookieEmail');
  constructor(private cookieService: CookieService) { }
  ngOnInit(): void {
  }
}