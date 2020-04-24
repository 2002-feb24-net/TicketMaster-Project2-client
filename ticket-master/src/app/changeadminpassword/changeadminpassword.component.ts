import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import Admin from '../models/admin';
import floatingTicket from '../floatingTicket';
import { Location } from '@angular/common';
@Component({
  selector: 'app-changeadminpassword',
  templateUrl: './changeadminpassword.component.html',
  styleUrls: ['./changeadminpassword.component.css']
})
export class ChangeadminpasswordComponent implements OnInit {
  pass = new FormControl('');

  admins: Admin;

  intholder: number;
  passholder: string;
  strholder: string;


  constructor(
    private builder: FormBuilder,
    private cookieService: CookieService,
    public adminsApi: ApiService,
    private location: Location
  ) { }
  ngOnInit(): void {


  }



  changeadminPassword() {
    this.strholder = this.cookieService.get('cookieID');
    this.intholder = parseInt(this.strholder); // + passholder

    this.adminsApi.changeadminPassword(this.intholder, this.passholder, this.admins);
    this.location.back();
  }

}
