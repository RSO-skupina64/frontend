import {Component, OnInit} from '@angular/core';
import {ProductService} from "./product.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private recipeService: ProductService) { }

  ngOnInit() {
  }

}
