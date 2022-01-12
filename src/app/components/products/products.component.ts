import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { searchQuery } from 'src/models/searchQuery.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  selectedCategory: string = 'tous';
  products: any;
  page = 1;
  search: searchQuery = { query: '' };

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts(this.page, this.selectedCategory);
  }

  public get getCategories(): string[] {
    return this.productService.categories;
  }

  public onSearch(): void {
    this.productService
      .getProducts(this.page, this.selectedCategory, this.search)
      .subscribe((data) => (this.products = data));
  }

  public getProducts(page: number, category: string, search?: searchQuery): void {
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

  public nextPage(): void {
    if (
      this.products.length &&
      this.products.length >= this.productService.PAGINATION_LIMIT
    ) {
      this.page++;
      this.getProducts(this.page, this.selectedCategory);
    }
  }

  public previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.getProducts(this.page, this.selectedCategory);
    }
  }
}
