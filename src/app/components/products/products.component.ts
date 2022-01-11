import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  selectedCategory: string = 'all';
  products: any;
  page = 1;
  searchInput = '';

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts(this.page, this.selectedCategory);
  }

  public get getCategories(): string[] {
    return this.productService.categories;
  }

  public onSearch(): void {
    console.log(this.searchInput);
    this.productService
      .getProducts(this.page, this.selectedCategory, this.searchInput)
      .subscribe((data) => (this.products = data));
  }

  public getProducts(page: number, category: string): void {
    // If input category not exists in categories list (to prevent injections), return all products
    if (!this.productService.categories.includes(category)) {
      return;
    }

    this.selectedCategory = category;

    this.productService
      .getProducts(this.page, category)
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
