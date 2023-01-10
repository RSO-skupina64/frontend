import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../products/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../models/product.model";
import {FavoriteProductsService} from "./favorite-products.service";

@Component({
  selector: 'app-kosarica',
  templateUrl: './kosarica.component.html',
  styleUrls: ['./kosarica.component.css']
})
export class KosaricaComponent implements OnInit {
  products: Product[];
  kosarica: Product[];
  cena: number;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute,
              private favoriteProductsService: FavoriteProductsService) {
    this.cena = 0;
  }

  ngOnInit(): void {
    if (localStorage.getItem('jwt') === null) {
      console.log('no jwt so not calling');
      this.kosarica = [];
    } else {
      this.favoriteProductsService.getFavoriteProducts()
        .subscribe(result => {
          console.log('received favorite products:');
          console.log(result);
          this.kosarica = result.products
        });
    }

    this.productService.getProducts()
      .subscribe(products => this.products = products.products);
  }

  addFavorite(product: Product) {
    console.log('adding ' + product.id);
    this.kosarica.push(product);
    let index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }

  removeFavorite(product: Product) {
    console.log('removing ' + product.id);
    this.products.push(product);
    let index = this.kosarica.indexOf(product);
    this.kosarica.splice(index, 1);
  }

  izracunCene() {
    console.log('izračun cene za:');
    console.log(this.kosarica);
    this.cena = 10;
  }


}
