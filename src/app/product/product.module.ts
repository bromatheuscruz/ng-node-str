import { ProductRoutingModule } from './product.routing.module';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { ProductComponent } from "./product.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { ProductResolver } from './product-resolver/product-resolver';
import { ProductService } from "./product.service";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProductListResolver } from "./product-resolver/product-list.resolver";

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ProductRoutingModule, ReactiveFormsModule],
  exports: [],
  declarations: [
    ProductComponent,
    NewProductComponent,
    ProductListComponent,
    ProductEditComponent],
  providers: [ProductService, ProductListResolver, ProductResolver]
})
export class ProductModule { }
