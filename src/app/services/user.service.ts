import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {UserData} from '../configs/userdata.config'
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});

   getProfile(){
   return this.http.get(UserData.userUrl+"megha@gmail.com")
   .map(data => data.json(),
   (error: any)=>console.log("error in getting data from database"));
 }

  putProfile(obj){

   return this.http.put('http://localhost:8768/update',obj, {headers: this.headers})
    .map(data => data.json(),
  (error: any)=>console.log("error"));
 }

}
