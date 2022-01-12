import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/models/product.model';
import { searchQuery } from 'src/models/searchQuery.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products?: Product[];
  page = 1;
  selectedCategory: string = 'tous';
  search = {query: ''};
  selectedProduct?: Product;

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts(this.page, this.selectedCategory, this.search);
  }

  public getProducts(page: number, category: string, search: searchQuery): void {
    // If input category not exists in categories list (to prevent injections), return all products
    if (!this.productService.categories.includes(category)) {
      return;
    }

    this.selectedCategory = category;
    this.page = page;

    this.productService
      .getProducts(page, category, search)
      .subscribe((data) => (this.products = data));
  }

  public selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  public deleteProduct(id?: number): void {
    if(!id) {
      return;
    }

    this.productService
      .deleteProduct(id)
      .subscribe((data) =>
        this.getProducts(this.page, this.selectedCategory, this.search)
      );
  }
}
