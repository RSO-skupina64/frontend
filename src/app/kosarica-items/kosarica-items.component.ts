import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models/product.model";
import {FavoriteProductsService} from "../kosarica/favorite-products.service";
import {KosaricaComponent} from "../kosarica/kosarica.component";

@Component({
  selector: 'app-kosarica-items',
  templateUrl: './kosarica-items.component.html',
  styleUrls: ['./kosarica-items.component.css']
})
export class KosaricaItemsComponent implements OnInit {
  @Input() product: Product;

  constructor(private favoriteProductsService: FavoriteProductsService, private kosaricaComponent: KosaricaComponent) {
  }

  ngOnInit(): void {
  }

  remove() {
    if (localStorage.getItem('jwt') === null) {
      this.kosaricaComponent.removeFavorite(this.product);
    } else {
      this.favoriteProductsService.removeFavoriteProduct(this.product)
        .subscribe(result => {
          console.log(result);
          this.kosaricaComponent.removeFavorite(this.product);
        })
    }
  }

}
