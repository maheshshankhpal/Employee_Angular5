import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {ApiHandler} from './api-handler.service';
import {JwtHelper} from '../helpers/jwt-helper';
import {Observable} from 'rxjs';
import {RequestMethod} from '@angular/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
// tslint:disable-next-line:class-name
class data {
  accessToken: string;
}
interface MyObj {
  accessToken: string;
  data: data;
}
@Injectable()
export class AuthService {
  private _jwt: JwtHelper = new JwtHelper();
  private redirectUrl: string;
  public message: string;

  constructor(private _apiHandler: ApiHandler, private _userService: UserService) {
  }


  /**
   * check for expiration and if token is still existing or not
   * @return {boolean}
   */
  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && !this._jwt.isTokenExpired();
  }

  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

  getRedirectUrl(): string {
    return this.redirectUrl;
  }

  /**
   * this is used to logout the user
   */
  logout(): Observable<string> {
    return this._apiHandler.callService(`/user/logout/${this._userService.get().id}`, RequestMethod.Get)
      .map(res => <string>res.text())
      .do(() => {
        this.clear();
      });
  }


  /**
   * this is used to clear anything that needs to be removed
   */
  clear(): void {
    localStorage.clear();
  }

  /**
   * this returns the token for the user
   * @param email
   * @param password
   */
  authenticate(email: string, password: string): Observable<string> {
    return this._apiHandler.callService('/api/TokenAuth/token', RequestMethod.Post, {Username: email, Password: password})
      .map(res => <string>res.text())
      .do((token: string) => {
        const authData = JSON.parse(token);
        if (authData.results.status === 1) {
          localStorage.setItem('token', authData.data.accessToken);
          localStorage.setItem('userinfo', JSON.stringify(authData.data.userinfo));
          this._userService.set(this._jwt.decodeToken());
        } else {
           return authData.results;
        }
      });
  }

  /**
   * this is used to alert our caller if we should go get token for next request or
   * to be carried out request
   *
   * @param threshold_seconds  is like a threshold to check if we should or not check for token
   * default we use 2min before the token expires
   *
   * @return {boolean}
   */
  shouldIGetToken(threshold_seconds: number = 120): boolean {
    const expDate = this._jwt.getTokenExpirationDate().valueOf() - (threshold_seconds * 1000);

    return new Date().valueOf() > expDate;
  }

  /**
   * this is used to retrieve a newer token since the current one is going to expire soon
   *
   */
  retrieveToken(): Observable<string> {
    return this._apiHandler.callService('/user/token', RequestMethod.Get)
      .map(res => <string>res.text())
      .do((token: string) => {
        this.clear();
        localStorage.setItem('token', token);
        this._userService.set(this._jwt.decodeToken());
      });
  }

}

