import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product.model";
import {ProductService} from "../products/product.service";
import {AdministracijaService} from "../administracija.service";

@Component({
  selector: 'app-administracija',
  templateUrl: './administracija.component.html',
  styleUrls: ['./administracija.component.css']
})
export class AdministracijaComponent implements OnInit {
  public products: Product[];

  constructor(private productService: ProductService, private administracijaService: AdministracijaService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(result => this.products = result.products);
  }

  pridobiCene() {
    this.administracijaService.fetchPrices()
      .subscribe(result => console.log(result));
  }
}
