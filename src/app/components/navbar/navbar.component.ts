import { Component, OnInit } from '@angular/core';
import { environment } from 'environment';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  user?: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.getUser();
  }

  getShopName(): string {
    return environment.shop_name;
  }

  getUser(): User | undefined {
    return this.userService.userLogged || undefined;
  }

  isAdmin(): boolean {
    return this.getUser() && this.user?.roles?.includes('admin') || false;
  }
}
