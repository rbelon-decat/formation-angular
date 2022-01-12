import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((params) => {
      console.log(params);
      if (params[0].path === 'logout') {
        this.logout();
      }
    });
  }

  logout(): void {
    this.userService.isLogged = false;
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  onSubmit(form: NgForm) {
    console.log(form.form);

    if (this.userService.isLogged && this.userService.userLogged) {
      console.log(
        `Utilisateur ${this.userService.userLogged.name} déjà connecté !`
      );
      return;
    }

    this.userService.login(form.form.value.username, form.form.value.password);

    if(this.userService.userLogged && this.userService.userLogged?.roles?.includes('admin')) {
      this.router.navigate(['/admin/product/list']);
    }
    this.router.navigate(['/']);
  }
}
