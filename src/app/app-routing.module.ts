import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path :"" , redirectTo : "home" ,pathMatch:"full" },
  {path : "home" , canActivate:[authGuard] ,component : HomeComponent},
  {path : "register" , component : RegisterComponent},
  {path : "brands" , canActivate:[authGuard] ,component :BrandsComponent },
  {path : "products" , canActivate:[authGuard] ,component : ProductsComponent},
  {path : "categories" , canActivate:[authGuard] ,component : CategoriesComponent},
  {path : "cart" , canActivate:[authGuard] ,component : CartComponent},
  {path : "login" , component : LoginComponent},
  {path : "productDetails/:id" , canActivate:[authGuard] ,component : ProductDetailsComponent},
  {path : "**" , component : NotfoundComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
