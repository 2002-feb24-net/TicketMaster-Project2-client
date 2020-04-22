import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import User from '../models/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  error: string | undefined;
  createNoteForm = this.formBuilder.group({
    text: ['', Validators.required]
  });
  constructor(
    private usersApi: ApiService,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    return this.usersApi.getUsers()
      .then(
        users => {
          this.users = users;
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
