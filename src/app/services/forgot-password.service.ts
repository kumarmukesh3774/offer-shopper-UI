import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers ,URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import 'rxjs/add/operator/map';

import {ForgotPassword} from '../configs/forgotPassword.config';

@Injectable()
export class ForgotPasswordService {

  constructor(private http: Http) { }

   forgotPasswordWithEmail(username){
    return this.http.get(ForgotPassword.passEmailId+username)
     .map(data => {data.toString;

     },
	(error: any)=>console.log("error in calling register service"));
}

}
