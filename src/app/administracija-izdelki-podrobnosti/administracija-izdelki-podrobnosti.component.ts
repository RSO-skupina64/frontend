import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product.model";
import {ProductService} from "../products/product.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-administracija-izdelki-podrobnosti',
  templateUrl: './administracija-izdelki-podrobnosti.component.html',
  styleUrls: ['./administracija-izdelki-podrobnosti.component.css']
})
export class AdministracijaIzdelkiPodrobnostiComponent implements OnInit {
  product: Product;
  id: number;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.productService.getProduct(this.id).subscribe(value => this.product = value.product);
      }
    )
  }

}
