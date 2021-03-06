import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import User from '../models/user';
import floatingTicket from '../floatingTicket';
import { Location } from '@angular/common';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  pass = new FormControl('');

  users: User;

  intholder: number;
  passholder: string;
  strholder: string;


  constructor(
    private builder: FormBuilder,
    private cookieService: CookieService,
    public usersApi: ApiService,
    private location: Location
  ) { }
  ngOnInit(): void {


  }



  changePassword() {
    this.strholder = this.cookieService.get('cookieID');
    this.intholder = parseInt(this.strholder); // + passholder

    this.usersApi.changePassword(this.intholder, this.passholder, this.users);
    this.location.back();
  }

}
