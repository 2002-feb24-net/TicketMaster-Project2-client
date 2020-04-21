import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-closeticket',
  templateUrl: './closeticket.component.html',
  styleUrls: ['./closeticket.component.css']
})
export class CloseticketComponent implements OnInit {
  name = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

}
