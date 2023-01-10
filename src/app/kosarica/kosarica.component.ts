import {Component, OnInit} from '@angular/core';
import {ProductService} from "../products/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../models/product.model";
import {FavoriteProductsService} from "./favorite-products.service";
import {KosaricaProduct} from "../models/kosarica-item.model";
import {PriceCalculationService} from "../price-calculation.service";
import {CalculatePriceRequestModel} from "../models/calculate-price-request.model";
import {ShopPriceModel} from "../models/shop-price.model";

@Component({
  selector: 'app-kosarica',
  templateUrl: './kosarica.component.html',
  styleUrls: ['./kosarica.component.css']
})
export class KosaricaComponent implements OnInit {
  products: Product[];
  kosarica: KosaricaProduct[];
  cena: number;
  cene: ShopPriceModel[];

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute,
              private favoriteProductsService: FavoriteProductsService, private priceService: PriceCalculationService) {
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
    this.kosarica.push(new KosaricaProduct(product, 1));
    let index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }

  removeFavorite(kosaricaProduct: KosaricaProduct) {
    console.log('removing ' + kosaricaProduct.product.id);
    this.products.push(kosaricaProduct.product);
    let index = this.kosarica.indexOf(kosaricaProduct);
    this.kosarica.splice(index, 1);
  }

  izracunCene() {
    console.log('izračun cene za:');
    console.log(this.kosarica);
    // map object
    let req = this.kosarica.map(value => {
      return {
        id_product: value.product.id,
        quantity: value.quantity
      };
    });
    this.priceService.calculatePriceAllShops(new CalculatePriceRequestModel(req))
      .subscribe(result => {
        this.cene = result.shopPrices;
      });
    this.cena = 10;
  }

  onQuantityChange(change: {quantity: number, index: number}) {
    this.kosarica[change.index].quantity = change.quantity;
  }


}
