import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models/product.model";
import {FavoriteProductsService} from "../kosarica/favorite-products.service";
import {KosaricaComponent} from "../kosarica/kosarica.component";

@Component({
  selector: 'app-kosarica-product-item',
  templateUrl: './kosarica-products.component.html',
  styleUrls: ['./kosarica-products.component.css']
})
export class KosaricaProductsComponent implements OnInit {
  @Input() product: Product;
  @Input() index: number;

  constructor(private favoriteProductsService: FavoriteProductsService, private kosaricaComponent: KosaricaComponent) {
  }


  ngOnInit(): void {
  }

  add() {
    console.log(this.product);
    if (localStorage.getItem('jwt') === null) {
      this.kosaricaComponent.addFavorite(this.product);
    } else {
      this.favoriteProductsService.addFavoriteProduct(this.product)
        .subscribe(result => {
          console.log(result)
          this.kosaricaComponent.addFavorite(this.product);
        });
    }
  }
}
