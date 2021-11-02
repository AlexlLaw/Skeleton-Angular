import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { UserService } from './user/user.service';
import { urlConfigs } from '../utils/urls/url-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API = `${environment.API}${urlConfigs.url_home_login}`;

  constructor(private http: HttpClient, private userService: UserService) { }

  public postAuthenticate(username: string, password: string): Observable<any> {

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
