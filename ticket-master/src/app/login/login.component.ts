import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';
import User from '../models/user';
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
  email1: string;
  password1: string;
    testUser2: User;


  constructor(
    private builder: FormBuilder,
    private cookieService: CookieService,
    private location: Location,
    private userApi: ApiService
    ) { }
  ngOnInit(): void {
  }
  onSubmit() {

    const testUser: User = {
      firstName: this.loginForm.get('firstName')?.value,
      lastName: this.loginForm.get('lastName')?.value,
      address: this.loginForm.get('address')?.value,
      city: this.loginForm.get('city')?.value,
      state: this.loginForm.get('state')?.value,
      phoneNumber: this.loginForm.get('phone')?.value,
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    };
    //const testUser2: User = {
    //  firstName: "",
    //  lastName: "",
    //  address: "",
    //  city: "",
    //  state: "",
    //  phoneNumber: "",
    //  email: "",
    //  password: ""

    //};


    return this.userApi.getUser(testUser.email, testUser.password)
      .then(
        user => {
          this.testUser2 = user;
          this.cookieService.set('cookieID', user.id.toString());
          this.cookieService.set('cookieFirstName', user.firstName);
          this.cookieService.set('cookieLastName', user.lastName);
          this.cookieService.set('cookieFullName', user.firstName + " " + user.lastName);
          this.cookieService.set('cookieAddress', user.address);
          this.cookieService.set('cookieCity', user.city);
          this.cookieService.set('cookieState', user.state);
          this.cookieService.set('cookiePhoneNumber', user.phoneNumber);
          this.cookieService.set('cookieEmail', user.email);
          this.cookieService.set('cookiePassword', user.password);
          this.location.back();



          console.warn(this.testUser2);
        }
    );






    //this.email1 = document.getElementById("email").value;
    //this.password1 = document.getElementById("password").textContent;

    //this.password1 = document.querySelector('#password').value;



        
    //console.warn(testUser.email, testUser.password);
    //console.warn(testUser);

    //console.log(this.userApi.getUser(testUser.email, testUser.password));



    //this.cookieService.set('cookieEmail', this.loginForm.value.email);
    //this.cookieService.set('cookiePassword', this.loginForm.value.password);
    //this.location.back();
  }
}
