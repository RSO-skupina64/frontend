import {Injectable} from "@angular/core";
import {ProductResponse, SingleProductResponse} from "../models/product-response.model";
import {HttpClient} from "@angular/common/http";
import { catchError } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProductService {
  private products: ProductResponse[] = [];
  private url = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {
  }


  getProducts() {
    let url1 = this.url + '?limit=10&offset=0';
    return this.http.get<ProductResponse[]>(url1)
      .pipe(catchError(this.handleError));
  }

  getProduct(id: number) {
    id = id + 1;
    let url1 = this.url + '/' + id;
    return this.http.get<SingleProductResponse>(url1)
      .pipe(catchError(this.handleError));
  }

  addProduct(product: ProductResponse) {
    this.products.push(product);
  }

  private handleError(error: any): Promise<any> {
    console.error('Prišlo je do napake', error);
    return Promise.reject(error.message || error);
  }


}
