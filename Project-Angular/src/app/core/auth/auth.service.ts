import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { UserService } from './user/user.service';
import { urlConfigs } from '../utils/urls/url-config';
import { SignInInterface } from '../interfaces/request/sign-in.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API = `${environment.API}${urlConfigs.url_home_login}`;

  constructor(private http: HttpClient, private userService: UserService) { }

  public postAuthenticate(dados: SignInInterface): Observable<any> {
    const username = dados.username;
    const password = dados.password;
    return this.http
     .post(`${this.API}`,
      { username, password },
      { observe: 'response' })
    .pipe(tap(res => {
      const authToken = res.body.token;
      this.userService.setToken(authToken);
    }));
  }
}
