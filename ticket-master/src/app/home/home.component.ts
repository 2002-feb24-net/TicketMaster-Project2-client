import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = new FormControl('');

  checked: boolean = true; //view user or admin
  constructor(private usersApi: ApiService,private cookieService: CookieService) {

  }
  ngOnInit(): void {

  }
}
