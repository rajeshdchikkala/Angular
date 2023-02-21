

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ProductComponent } from './products/product/product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductsService } from './products/products.service';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ProductsComponent,
    UserComponent,
    EditProductComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
   
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
