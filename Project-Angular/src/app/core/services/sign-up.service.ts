import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { SignUpInterface } from '../interfaces/request/sign-up.interface';
import { urlConfigs } from '../utils/urls/url-config';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpService extends BaseService<SignUpInterface> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}${urlConfigs.url_home_cadastro}`);
  }
}