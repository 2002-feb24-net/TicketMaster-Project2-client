import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

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

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registerForm.value);

    console.log(this.registerForm);
  }

}
