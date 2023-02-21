import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-productsnew',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: {id: number, name: string, status: string}[] = [];

  constructor(private prdService: ProductsService) { }

  ngOnInit() {
    this.products = this.prdService.getProducts();
  }

}
