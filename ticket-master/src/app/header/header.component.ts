import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  faLaptop = faLaptop;
  firstName = this.getCookie();
 

  constructor(private cookieService: CookieService) { }
  ngOnInit(): void {
  }
  getCookie() {
    let tempemail = this.cookieService.get('cookieFirstName');
    if (tempemail.length < 1) {
      this.cookieService.set('cookieFirstName', 'Guest');
      this.cookieService.set('cookieEmail', '');
    }

    console.warn(this.cookieService.get('cookieFirstName'))
    return this.cookieService.get('cookieFirstName');
  }

}
