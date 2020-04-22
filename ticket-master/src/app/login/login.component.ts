import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

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
    private cookieService: CookieService
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);

    this.cookieService.set('cookieEmail', this.loginForm.value.email);
    this.cookieService.set('cookiePassword', this.loginForm.value.password);
  }

}
