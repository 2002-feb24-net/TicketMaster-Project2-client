import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  firstName = this.cookieService.get('cookieFirstName');
  supportLevel = this.cookieService.get('cookieSupportLevel');
  constructor(private cookieService: CookieService) { }
  ngOnInit(): void {
  }
}
