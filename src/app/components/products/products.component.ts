import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  categories = ['fruit', 'legume', 'legume-fruit'];
  products: any;
  showQuantities = false;

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public getProductsByCategory(category: string): void {
    // If input category not exists in categories list (to prevent injections), return all products
    if (!this.categories.includes(category)) {
      this.getProducts();
    }
    
    this.showQuantities = true;
    this.productService
      .getProducts(category)
      .subscribe((data) => (this.products = data));
  }

  public getProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.showQuantities = false;
    });
  }
}
