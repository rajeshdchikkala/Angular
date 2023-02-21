import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //server: {id: number, name: string, status: string};
  product:any={};

  constructor(private prdService: ProductsService) { }

  ngOnInit() {
    this.product = this.prdService.getProduct(1);
  }

}
