import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/users`);
  }
}
