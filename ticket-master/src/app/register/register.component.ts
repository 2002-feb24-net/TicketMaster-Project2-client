import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';

import { HttpErrorResponse } from '@angular/common/http';
import User from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.builder.group({

    //In order to add validations, we want to make changes here and in the html file
    //if we want to make a field required example:
    //  firstName: ['', Validators.required],

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
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value


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

      this.cookieService.set('cookieEmail', newUser.email);
      this.cookieService.set('cookiePassword', newUser.password);

    this.usersApi.createUser(newUser);



    document.getElementById("button1").click();
  }
}
