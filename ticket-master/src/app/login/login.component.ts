import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.builder.group({
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
    this.cookieService.set('cookieEmail', this.loginForm.value.email);
    this.cookieService.set('cookiePassword', this.loginForm.value.password);
    this.location.back();
  }
}
