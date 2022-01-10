import { Component, OnInit } from '@angular/core';
import { environment } from 'environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getShopName(): string {
    return environment.shop_name;
  }

}
