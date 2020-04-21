import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import Admin from '../models/admin';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  admins: Admin[] = [];
  error: string | undefined;

  createNoteForm = this.formBuilder.group({
    text: ['', Validators.required]
  });

  // the ctor is for DI and for any setup that doesn't need the DOM ready
  constructor(
    private adminsApi: ApiService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins() {
    return this.adminsApi.getAdmins()
      .then(
        admins => {
          this.admins = admins;
          this.resetError();
        }, // success
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
      this.error = `Backend returned code ${error.status}, body was: ${error.error}`;
    }
    // return an observable with a admin-facing error message
    // this.error = 'Something bad happened; please try again later.';
  }

  resetError() {
    this.error = undefined;
  }

}
