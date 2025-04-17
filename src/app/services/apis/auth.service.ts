import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';

import {API_ENDPOINT} from "../../config/api-endpoint.config";
import {ApiService} from '../common/api.service';
import {IAlertMessage} from '../../interface/alert-message.interface';
import {ILogin} from '../../interface/login.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiService {

  private loginInfo!: ILogin;
  private alertMessages!: IAlertMessage;
  private jwtHelperService = new JwtHelperService();

  constructor(
    private _http: HttpClient,
    private router: Router,
  ) {
    super(_http);
  }


  login(form: ILogin): Observable<ILogin> {
    return this.post<ILogin>(API_ENDPOINT.auth.base + API_ENDPOINT.auth.login, {
      email: form.email.trim(),
      password: form.password.trim(),
    });
  }

  getIdLogin() {
    if (this.loginInfo) {
      return this.loginInfo.email;
    }
    return null;
  }

  isLoggedIn(): boolean {
    if (this.getToken()) {
      const expired = this.jwtHelperService.isTokenExpired(this.getToken());
      if (expired) {
        localStorage.clear();
      }
      return !expired;
    }
    return false;
  }

  override getToken() {
    return localStorage.getItem('token');
  }
}
