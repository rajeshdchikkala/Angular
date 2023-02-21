import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  //server?: {id: number, name: string, status: string};
  product:any={};
  productName = '';
  productStatus = '';

  constructor(private prdService: ProductsService) { }

  ngOnInit() {
    this.product = this.prdService.getProduct(1);
    this.productName = this.product.name;
    this.productStatus = this.product.status;
  }

  onUpdateProduct() {
    this.prdService.updateProduct(this.product.id, {name: this.productName, status: this.productStatus});
  }

}
