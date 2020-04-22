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
