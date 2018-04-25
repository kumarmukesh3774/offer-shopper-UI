import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers ,URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import 'rxjs/add/operator/map';

import { Login } from '../configs/login.config';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json'});

  loginWithEmailId(username,password){
    let body= {
      "email":username,
      "password":password
    }
    return this.http.post(Login.loginWIthId, body, {headers: this.headers})
    .map((res:Response) => {
      localStorage.setItem("application-token",res.text());
      localStorage.setItem("userId",username);
    },
    (error: any)=>console.log("error in calling register service"));
  }

}
