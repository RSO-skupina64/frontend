import {Product} from "./product.model";
import {ProductService} from "../products/product.service";

export class ProductResponse {
  public count: number;
  public products: Product[];

  constructor(count: number, products: Product[]) {
    this.count = count;
    this.products = products;
  }
}

export class SingleProductResponse {
  public product: Product;


  constructor(product: Product) {
    this.product = product;
  }
}
