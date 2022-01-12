import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private BASE_URL = 'http://localhost:3000';

  isLogged = false;

  constructor(private readonly http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/users`);
  }

  public getUserByCredentials(
    username: string,
    password: string
  ): Observable<any> {
    return this.http.get(
      `${this.BASE_URL}/users?name=${username}&password=${password}`
    );
  }

  public get userLogged(): User {
    return JSON.parse(localStorage.getItem('user') || '{}') as User;
  }

  public login(username: string, password: string): void {
    this.getUserByCredentials(username, password)
    .subscribe((data) => {
      console.log(data);

      if (data.length > 0) {
        this.isLogged = true;
        localStorage.setItem('user', JSON.stringify(data[0]))
      }

      
    });
  }
}
