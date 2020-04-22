import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  email = this.cookieService.get('cookieEmail');
  logoutForm = this.builder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
  constructor(
    private builder: FormBuilder,
    private cookieService: CookieService,
    private location: Location
  ) { }
  ngOnInit(): void {
  }
  onSubmit() {
    this.cookieService.set('cookieEmail', "Guest");
    this.cookieService.set('cookiePassword', "Guest");
    this.location.back();
  }
}