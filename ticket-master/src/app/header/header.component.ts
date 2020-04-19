import { Component, OnInit } from '@angular/core';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  faLaptop = faLaptop;
  constructor() { }
  ngOnInit(): void {
  }
}
