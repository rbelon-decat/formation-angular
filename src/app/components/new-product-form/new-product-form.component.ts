import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
})
export class NewProductFormComponent implements OnInit {
  showErrors = false;

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  public get getCategories(): string[] {
    return this.productService.categories;
  }

  public getErrors(input: NgForm, key: string): any {
    return input.form.get(key)?.touched && input.form.get(key)?.errors;
  }

  onSubmit(input: NgForm): void {
    const form = input.form;
    console.log(form);

    if (form.errors) {
      this.showErrors = true;
      return;
    }

    this.productService
      .newProduct({
        name: form.value.productName,
        images: [form.value.productImage],
        stock: form.value.productStock || 0,
        available: true,
        price: form.value.productPrice,
        description: form.value.productDescription,
        category: form.value.productCategory,
      })
      .subscribe((data) => this.router.navigate(['/products', data.id]));
  }
}
