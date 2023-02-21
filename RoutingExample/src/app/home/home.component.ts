import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  onLoadProducts(){
    this.route.navigate(['/products']);
    /**
     * So on above line we can use both absolute path ie. /products and relative path ie. products
     * As we are calling it from home or other components. Both will work 
     * this.route.navigate(['/products']);
     * this.route.navigate(['products']);
     */
  }
}
