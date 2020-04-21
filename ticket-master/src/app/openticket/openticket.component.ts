import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-openticket',
  templateUrl: './openticket.component.html',
  styleUrls: ['./openticket.component.css']
})
export class OpenticketComponent implements OnInit {
  name = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

}
