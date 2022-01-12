import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() product?: Product;

  constructor() {}

  ngOnInit(): void {}

  public get hasImages(): boolean {
    return (this.product?.images && this.product?.images?.length > 1) || false;
  }

  public get getImage(): string {
    return (this.product?.images && this.product?.images[0]) || '';
  }
}
