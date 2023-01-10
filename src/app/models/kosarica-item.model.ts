import {Product} from "./product.model";

export class KosaricaProduct {
  public product: Product;
  public quantity: number;


  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }
}
