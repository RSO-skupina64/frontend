import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CalculatePriceRequestModel} from "./models/calculate-price-request.model";
import {catchError} from "rxjs/operators";
import {ShopsPriceModel} from "./models/shop-price.model";

@Injectable({
  providedIn: 'root'
})
export class PriceCalculationService {
  private url = 'http://localhost:8080/price';

  constructor(private http: HttpClient) {
  }

  calculatePriceAllShops(products: CalculatePriceRequestModel) {
    console.log(products);
    let url1 = this.url + '/calculate';
    return this.http.post<ShopsPriceModel>(url1, products)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error('Prišlo je do napake', error);
    return Promise.reject(error.message || error);
  }

}
