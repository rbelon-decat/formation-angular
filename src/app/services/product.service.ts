import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private BASE_URL = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {}

  // Get all the products in the databade
  public getProducts(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/products`);
  }

  // Get one product by ID in the database
  public getProductById(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/products/${id}`);
  }

  // Get products by category in the database
  public getProductByCategory(category: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/products?category=${category}`);
  }
}
