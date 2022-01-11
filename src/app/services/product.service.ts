import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private BASE_URL = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {}

  // Get all (or by category) products in the databade
  public getProducts(category?: string): Observable<any> {
    if(category) {
      return this.http.get(`${this.BASE_URL}/products?category=${category}`);
    }
    return this.http.get(`${this.BASE_URL}/products`);
  }

  // Get one product by ID in the database
  public getProductById(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/products/${id}`);
  }

  public patchProduct(id: number, field: object): Observable<any> {
    if(!(Object.keys(field).length === 1)) {
      return of(null);
    }
    return this.http.patch(`${this.BASE_URL}/products/${id}`, field);
  }

  public toggleProduct(id: number, available: boolean): Observable<any> {
    return this.http.patch(`${this.BASE_URL}/products/${id}`, { available });
  }
}
