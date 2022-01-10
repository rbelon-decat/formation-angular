import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any;

  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  
  private getProducts(): void {
    this.productService.getProducts().subscribe((data) => (this.products = data));
  }

}
