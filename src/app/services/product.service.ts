import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private BASE_URL = 'http://localhost:3000';
  categories = ['all', 'fruit', 'legume', 'autres'];
  PAGINATION_LIMIT = 6;

  constructor(private readonly http: HttpClient) {}

  // Get all (or by category) products in the databade
  public getProducts(page: number, category?: string): Observable<any> {
    const page_query = `_page=${page}&_limit=${this.PAGINATION_LIMIT}`;

    if(category && category !== 'all') {
      return this.http.get(`${this.BASE_URL}/products?category=${category}&${page_query}`);
    }
    return this.http.get(`${this.BASE_URL}/products?${page_query}`);
  }

  // Get one product by ID in the database
  public getProductById(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/products/${id}`);
  }

  public newProduct(product: object): Observable<any> {
    return this.http.post(`${this.BASE_URL}/products`, product)
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
