import {Injectable} from "@angular/core";
import {ProductResponse, SingleProductResponse} from "../models/product-response.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import {Product} from "../models/product.model";
import {MessageResponse} from "../models/register.model";

@Injectable({providedIn: 'root'})
export class FavoriteProductsService {
  private products: ProductResponse[] = [];
  private url = 'http://localhost:8080/favorite';

  constructor(private http: HttpClient) {
  }


  getFavoriteProducts() {
    console.log('call all');
    let url1 = this.url + '';
    let header = new HttpHeaders();
    let jwt = localStorage.getItem('jwt');
    if (jwt === null)
      jwt = "bearer";
    console.log(jwt);
    header = header.set('Authorization', jwt);
    return this.http.get<ProductResponse[]>(url1, {headers: header})
      .pipe(catchError(this.handleError));
  }

  addFavoriteProduct(product: Product) {
    let req = {product_id: product.id};
    let jwt = localStorage.getItem('jwt');
    if (jwt === null)
      jwt = "bearer";
    let header = new HttpHeaders();
    header = header.set('Authorization', jwt);
    let url1 = this.url + '';
    header = header.set('Authorization', jwt);
    return this.http.post<MessageResponse>(url1, req, {headers: header})
      .pipe(catchError(this.handleError));
  }

  removeFavoriteProduct(product: Product) {
    let req = {product_id: product.id};
    let jwt = localStorage.getItem('jwt');
    if (jwt === null)
      jwt = "bearer";
    console.log(jwt);
    let header = new HttpHeaders();
    header = header.set('Authorization', jwt);
    let url1 = this.url + '';
    header = header.set('Authorization', jwt);
    return this.http.delete<MessageResponse>(url1, {body: req, headers: header})
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error('Prišlo je do napake', error);
    return Promise.reject(error.message || error);
  }


}
