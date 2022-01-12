import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { NewProductFormComponent } from './components/admin/new-product-form/new-product-form.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin/product/list', component: ProductListComponent },
  { path: 'admin/product/new', component: NewProductFormComponent },
  { path: 'admin/user/list', component: UserListComponent },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: AuthComponent,
      },
      {
        path: 'logout',
        component: AuthComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
