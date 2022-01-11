import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  product: any;

  constructor(
    private readonly productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.getProductById(productId);
  }

  private getProductById(id: number): void {
    this.productService
      .getProductById(id)
      .subscribe((data) => (this.product = data));
  }

  public buyOneProduct() {
    if (this.product.stock > 0) {
      this.productService
        .patchProduct(this.product.id, { stock: this.product.stock - 1 })
        .subscribe((data) => (this.product = data));
    }
  }

  public toggleProduct() {
    this.productService
      .toggleProduct(this.product.id, !this.product.available)
      .subscribe((data) => (this.product = data));
  }
}
