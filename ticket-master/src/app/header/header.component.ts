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
  email = this.getCookie();
 

  constructor(private cookieService: CookieService) { }
  ngOnInit(): void {
  }
  getCookie() {
    let tempemail = this.cookieService.get('cookieEmail');
    if (tempemail = "") {
      this.cookieService.set('cookieEmail', 'Guest');
    }

    console.warn(this.cookieService.get('cookieEmail'))
    return this.cookieService.get('cookieEmail');
  }

}
