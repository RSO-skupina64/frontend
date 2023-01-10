export class CalculatePriceRequestModel {
  public products: CalculatePriceProduct[];

  constructor(products: CalculatePriceProduct[]) {
    this.products = products;
  }
}

export class CalculatePriceProduct {
  public id_product: number;
  public quantity: number;

  constructor(id: number, quantity: number) {
    this.id_product = id;
    this.quantity = quantity;
  }
}
