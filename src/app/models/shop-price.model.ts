export class ShopsPriceModel {
  public shopPrices: ShopPriceModel[];


  constructor(shopPrices: ShopPriceModel[]) {
    this.shopPrices = shopPrices;
  }
}

export class ShopPriceModel {
  public name: string;
  public id_shop: number;
  public price_total_EUR: number;
  public productPrices: ProductPrice[];

  constructor(name: string, id_shop: number, price_total_EUR: number, productPrices: ProductPrice[]) {
    this.name = name;
    this.id_shop = id_shop;
    this.price_total_EUR = price_total_EUR;
    this.productPrices = productPrices;
  }
}

export class ProductPrice {
  public price_EUR: number;
  public id: number;
  public name: string;
  public quantity: number;
  public message: string;


  constructor(price_EUR: number, id: number, name: string, quantity: number, message: string) {
    this.price_EUR = price_EUR;
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.message = message;
  }
}
