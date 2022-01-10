import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  categories = ['fruit', 'legume', 'legume-fruit'];
  products: any;

  constructor(
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProducts();

    this.productService
      .getProductById(1)
      .subscribe((data) => console.log(data));
  }

  public getProductsByCategory(category: string): void {
    // If input category not exists in categories list (to prevent injections), return all products
    if (!this.categories.includes(category)) {
      this.getProducts();
    }

    this.productService
      .getProductByCategory(category)
      .subscribe((data) => (this.products = data));
  }

  public getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((data) => (this.products = data));
  }
}
