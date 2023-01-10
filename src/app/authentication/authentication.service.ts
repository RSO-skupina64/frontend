import {Injectable} from "@angular/core";
import {ProductResponse} from "../models/product-response.model";
import {HttpClient} from "@angular/common/http";
import {LoginRequest, LoginResponse} from "../models/login-request.model";
import {MessageResponse, RegisterRequest} from "../models/register.model";

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private products: ProductResponse[] = [];
  private url = 'http://localhost:8080/authentication';

  constructor(private http: HttpClient) {
  }

  login(loginRequest: LoginRequest) {
    const req: LoginRequest = {username: loginRequest.username, password: loginRequest.password};
    let url1 = this.url + '/login';
    return this.http.post<LoginResponse>(url1, req)
      .subscribe(res => {
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

  private handleError(error: any): Promise<any> {
    console.error('Prišlo je do napake', error);
    return Promise.reject(error.message || error);
  }


}
