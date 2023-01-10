import {Injectable} from "@angular/core";
import {ProductResponse} from "../models/product-response.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginRequest, LoginResponse} from "../models/login-request.model";
import {MessageResponse, RegisterRequest} from "../models/register.model";
import {UserDetailsResponse} from "../models/user-details.model";
import {catchError} from "rxjs/operators";
import {UpdatePasswordModel} from "../models/update-password.model";

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private url = 'http://localhost:8080/authentication';

  constructor(private http: HttpClient) {
  }

  login(loginRequest: LoginRequest) {
    const req: LoginRequest = {username: loginRequest.username, password: loginRequest.password};
    let url1 = this.url + '/login';
    return this.http.post<LoginResponse>(url1, req)
      .subscribe(res => {
        localStorage.removeItem('jwt');
        localStorage.setItem('jwt', res.accessToken);
        console.log(res);
      });
  }

  logout() {

  }

  register(registerReq: RegisterRequest) {
    let url1 = this.url + '/register';
    return this.http.post<MessageResponse>(url1, registerReq)
      .subscribe(res => {
        console.log(res);
        console.log('register OK');
      });
  }

  getUserProfile() {
    let url1 = this.url + '/user';
    let header = new HttpHeaders();
    let jwt = localStorage.getItem('jwt');
    if (jwt === null)
      jwt = "bearer";
    console.log(jwt);
    header = header.set('Authorization', jwt);
    return this.http.get<UserDetailsResponse>(url1, {headers: header})
      .pipe(catchError(this.handleError));
  }

  updateUserProfile(req: UserDetailsResponse) {
    let url1 = this.url + '/user';
    let header = new HttpHeaders();
    let jwt = localStorage.getItem('jwt');
    if (jwt === null)
      jwt = "bearer";
    console.log(jwt);
    header = header.set('Authorization', jwt);
    return this.http.put<UserDetailsResponse>(url1, req, {headers: header})
      .pipe(catchError(this.handleError));
  }

  updatePassword(req: UpdatePasswordModel) {
    let url1 = this.url + '/user-change-password';
    let header = new HttpHeaders();
    let jwt = localStorage.getItem('jwt');
    if (jwt === null)
      jwt = "bearer";
    console.log(jwt);
    header = header.set('Authorization', jwt);
    return this.http.put<UserDetailsResponse>(url1, req,{headers: header})
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error('Prišlo je do napake', error);
    return Promise.reject(error.message || error);
  }


}
