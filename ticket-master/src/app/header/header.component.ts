import { Component, OnInit } from '@angular/core';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  faLaptop = faLaptop;
  email = this.cookieService.get('cookieEmail');

  constructor(private cookieService: CookieService) { }
  ngOnInit(): void {
  }

  getCookie(){
    return this.cookieService.get('cookieEmail');
  }
}
