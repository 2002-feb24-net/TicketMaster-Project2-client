import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpErrorResponse } from '@angular/common/http';
import User from '../models/user';
import { Location } from '@angular/common';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.builder.group({
    id: [''],
    firstName: [''],
    lastName: [''],
    address: [''],
    city: [''],
    state: [''],
    phone: [''],
    email: [''],
    password: [''],
  })
  error: string | undefined;
  notes: User[] = [];
  constructor(
    private usersApi: ApiService,
    private builder: FormBuilder,
    private cookieService: CookieService,
    private location: Location
  ) { }
  ngOnInit(): void {
  }
  onSubmit() {
      const newUser: User = {
        firstName: this.registerForm.get('firstName')?.value,
        lastName: this.registerForm.get('lastName')?.value,
        address: this.registerForm.get('address')?.value,
        city: this.registerForm.get('city')?.value,
        state: this.registerForm.get('state')?.value,
        phoneNumber: this.registerForm.get('phone')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value
    };

    this.usersApi.createUser(newUser);
    //this.cookieService.set('cookieID', newUser.id.toString());
    this.cookieService.set('cookieFirstName', newUser.firstName);
    this.cookieService.set('cookieLastName', newUser.lastName);
    this.cookieService.set('cookieFullName', newUser.firstName + " " + newUser.lastName);
    this.cookieService.set('cookieAddress', newUser.address);
    this.cookieService.set('cookieCity', newUser.city);
    this.cookieService.set('cookieState', newUser.state);
    this.cookieService.set('cookiePhoneNumber', newUser.phoneNumber);
    this.cookieService.set('cookieEmail', newUser.email);
    this.cookieService.set('cookiePassword', newUser.password);
      this.location.back();
  }
}
