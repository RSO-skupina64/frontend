import {Injectable} from "@angular/core";
import {ProductResponse} from "../models/product-response.model";
import {HttpClient} from "@angular/common/http";
import { catchError } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProductService {
  private products: ProductResponse[] = [];
  private url = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {
  }


  getProducts() {
    return this.http.get<ProductResponse[]>(this.url)
      .pipe(catchError(this.handleError));
  }

  getProduct(id: number) {
    return this.products[id];
  }

  addProduct(product: ProductResponse) {
    this.products.push(product);
  }

  private handleError(error: any): Promise<any> {
    console.error('Prišlo je do napake', error);
    return Promise.reject(error.message || error);
  }


}
