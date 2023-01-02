import {Product} from "./product.model";

export class ProductResponse {
  public count: number;
  public products: Product[];

  constructor(count: number, products: Product[]) {
    this.count = count;
    this.products = products;
  }
}
