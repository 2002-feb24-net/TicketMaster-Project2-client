import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import User from './models/user';
import Admin from './models/admin';
import Ticket from './models/ticket';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.baseUrl;
  get defaultUserId() { return 1; } // Angular client

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${this.baseUrl}api/users`)
      .toPromise();
  }

  getAdmins() {
    return this.http.get<Admin[]>(`${this.baseUrl}api/admins`)
      .toPromise();
  }

  getTickets() {
    return this.http.get<Ticket[]>(`${this.baseUrl}api/tickets`)
      .toPromise();
  }




}
