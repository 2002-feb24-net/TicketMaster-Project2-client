import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = new FormControl('');
  checked: boolean = true; //view user or admin


  constructor(private usersApi: ApiService) { }
  ngOnInit(): void {
    document.getElementById("button1").click();
    document.getElementById("button1").focus();

  }

}
