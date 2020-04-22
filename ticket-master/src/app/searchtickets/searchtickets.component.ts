import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import Ticket from '../models/ticket';
@Component({
  selector: 'app-searchtickets',
  templateUrl: './searchtickets.component.html',
  styleUrls: ['./searchtickets.component.css']
})
export class SearchticketsComponent implements OnInit {
  tickets: Ticket[] = [];
  error: string | undefined;
  createNoteForm = this.formBuilder.group({
    text: ['', Validators.required]
  });
  constructor(
    private ticketsApi: ApiService,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.getTickets();
  }
  getTickets() {
    return this.ticketsApi.getTickets()
      .then(
        tickets => {
          this.tickets = tickets;
          this.resetError();
        },
        error => {
          this.handleError(error);
        } 
      );
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.error = `An error occurred: ${error.error.message}`;
    } else {
      this.error = `Backend returned code ${error.status}, body was: ${error.error}`;
    }
  }
  resetError() {
    this.error = undefined;
  }
}
