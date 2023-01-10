import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {MessageResponse} from "./models/register.model";

@Injectable({
  providedIn: 'root'
})
export class AdministracijaService {
  private url = 'http://localhost:8080/administration';

  constructor(private http: HttpClient) { }

  fetchPrices() {
    let url1 = this.url + '/price?fetchPictures=true';
    let header = new HttpHeaders();
    let jwt = localStorage.getItem('jwt');
    if (jwt === null)
      jwt = "bearer";
    console.log(jwt);
    header = header.set('Authorization', jwt);
    return this.http.post<MessageResponse>(url1, {}, {headers: header})
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error('Prišlo je do napake', error);
    return Promise.reject(error.message || error);
  }

}
