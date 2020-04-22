import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-openticket',
  templateUrl: './openticket.component.html',
  styleUrls: ['./openticket.component.css']
})
export class OpenticketComponent implements OnInit {
  createTicketForm = this.builder.group({
    title: [''],
    category: [''],
    priority: [''],
    details: [''],
  })
  constructor(
    private builder: FormBuilder,
    private cookieService: CookieService
    ) { }
  ngOnInit(): void {
  }
  getCookie(){
    this.cookieService.get('cookieEmail');
    this.cookieService.get('cookiePassword');
  }
  onSubmit(){
    console.log(this.createTicketForm)
  }
}
