import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
})
export class NewProductFormComponent implements OnInit {
  @Input() method?: 'add' | 'edit' = 'add';
  @Input() product?: Product;
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

    const productValues = {
      name: form.value.productName,
      images: [form.value.productImage || 'https://la-tricoterie.fr/wp-content/uploads/2018/09/visuel-a-venir.jpg'],
      stock: form.value.productStock || 0,
      available: true,
      price: form.value.productPrice,
      description: form.value.productDescription,
      category: form.value.productCategory,
    };

    if(this.method === 'add') {
      this.productService
      .newProduct(productValues)
      .subscribe((data) => this.router.navigate(['/products', data.id]));
    }

    if(this.method === 'edit' && this.product) {
      this.productService.editProduct({...productValues, id: this.product.id}).subscribe(data => console.log(data))
    }
  }
}
