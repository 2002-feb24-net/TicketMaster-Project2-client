import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';
import Admin from '../models/admin';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-adminportal',
  templateUrl: './adminportal.component.html',
  styleUrls: ['./adminportal.component.css']
})
export class AdminportalComponent implements OnInit {
  loginForm = this.builder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]

  })
  email1: string;
  password1: string;
  testAdmin2: Admin;
  error: string;
  firstName = this.cookieService.get('cookieFirstName');


  constructor(
    private builder: FormBuilder,
    private cookieService: CookieService,
    private location: Location,
    private adminApi: ApiService
  ) { }
  ngOnInit(): void {
  }
  onSubmit() {

    const testAdmin: Admin = {
      firstName: this.loginForm.get('firstName')?.value,
      currentTicket: this.loginForm.get('currentTicket')?.value,
      supportLevel: this.loginForm.get('supportLevel')?.value,
      lastName: this.loginForm.get('lastName')?.value,
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    };
    //const testAdmin2: Admin = {
    //  firstName: "",
    //  lastName: "",
    //  address: "",
    //  city: "",
    //  state: "",
    //  phoneNumber: "",
    //  email: "",
    //  password: ""

    //};


    return this.adminApi.getAdmin(testAdmin.email, testAdmin.password)
      .then(
        admin => {
          this.testAdmin2 = admin;
          this.resetError();
          this.cookieService.set('cookieID', admin.id.toString());
          this.cookieService.set('cookieFirstName', admin.firstName);
          this.cookieService.set('cookieLastName', admin.lastName);
          this.cookieService.set('cookieFullName', admin.firstName + " " + admin.lastName);
          this.cookieService.set('cookieEmail', admin.email);
          this.cookieService.set('cookiePassword', admin.password);
          this.cookieService.set('cookieSurrentTicket', admin.currentTicket);
          this.cookieService.set('cookieSupportLevel', admin.supportLevel.toString())
          // Simulate a mouse click:
          window.location.href = "/account";
          console.warn(this.testAdmin2);
        },

        error => {
          this.handleError(error);
        } // error
      );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      this.error = `An error occurred: ${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      this.error = `${error.error}`;
    }
    // return an observable with a admin-facing error message
    // this.error = 'Something bad happened; please try again later.';
  }

  resetError() {
    this.error = undefined;
  }
}
