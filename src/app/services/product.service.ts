import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private BASE_URL = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {}

  public getProducts(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/products`);
  }
}
