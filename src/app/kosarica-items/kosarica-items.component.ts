import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../models/product.model";
import {FavoriteProductsService} from "../kosarica/favorite-products.service";
import {KosaricaComponent} from "../kosarica/kosarica.component";
import {KosaricaProduct} from "../models/kosarica-item.model";

@Component({
  selector: 'app-kosarica-items',
  templateUrl: './kosarica-items.component.html',
  styleUrls: ['./kosarica-items.component.css']
})
export class KosaricaItemsComponent implements OnInit {
  @Input() kosaricaProduct: KosaricaProduct;
  @Input() i: number;
  @Output() quantityChanged = new EventEmitter<{quantity: number, index: number}>();
  value: number;


  constructor(private favoriteProductsService: FavoriteProductsService, private kosaricaComponent: KosaricaComponent) {
    this.value = 1;
  }

  ngOnInit(): void {
  }

  remove() {
    if (localStorage.getItem('jwt') === null) {
      this.kosaricaComponent.removeFavorite(this.kosaricaProduct);
    } else {
      this.favoriteProductsService.removeFavoriteProduct(this.kosaricaProduct)
        .subscribe(result => {
          console.log(result);
          this.kosaricaComponent.removeFavorite(this.kosaricaProduct);
        })
    }
  }

  updateQuantity(event: Event) {
    console.log(this.value);
    this.quantityChanged.emit({quantity: this.value, index: this.i});
    // return this.kosaricaProduct.quantity;
  }

}
