import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpErrorResponse } from '@angular/common/http';
import Ticket from '../models/ticket';
import { Location } from '@angular/common';
@Component({
  selector: 'app-openticket',
  templateUrl: './openticket.component.html',
  styleUrls: ['./openticket.component.css']
})
export class OpenticketComponent implements OnInit {
  createTicketForm = this.builder.group({
    title: [''],
    category: ['something'],
    datetimeOpened: ['2019-01-06T17:16:40'],
    datetimeModified: ['2019-01-06T17:16:40'],
    datetimeClosed: [null],
    priority: [1],
    details: [''],
    userid: [3],
    adminId: [3],
    storeId: [3],
    completed: ['OPEN'],
    userRequesterName: [''],
    adminAssignedName: ['Morgan Hay']
  })
  constructor(
    private usersApi: ApiService,
    private builder: FormBuilder,
    private cookieService: CookieService,
    private location: Location
    ) { }
  ngOnInit(): void {
  }
  getCookie(){
    this.cookieService.get('cookieEmail');
    this.cookieService.get('cookiePassword');
  }
  onSubmit() {
    const openTicket: Ticket = {
      title: this.createTicketForm.get('title')?.value,
      category: this.createTicketForm.get('category')?.value,
      datetimeOpened: this.createTicketForm.get('datetimeOpened')?.value,
      datetimeModified: this.createTicketForm.get('datetimeModified')?.value,
      datetimeClosed: this.createTicketForm.get('datetimeClosed')?.value,
      priority: this.createTicketForm.get('priority')?.value,
      details: this.createTicketForm.get('details')?.value,
      userid: this.createTicketForm.get('userid')?.value,
      adminId: this.createTicketForm.get('adminId')?.value,
      storeId: this.createTicketForm.get('storeId')?.value,
      userRequesterName: this.cookieService.get('cookieEmail'),
      adminAssignedName: this.createTicketForm.get('adminAssignedName')?.value,
      completed: this.createTicketForm.get('completed')?.value

    };
    this.usersApi.openTicket(openTicket);
    this.location.back();
  }
}
