import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Subscribe} from '../configs/subscribe.config';

@Injectable()
export class SubscribeService {

  constructor(private http: Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});


  getAllDetails(){
    return this.http.get(Subscribe.getSubscriptionUrl)
    .map(data => data.json(),
    (error: any)=>console.log("error in getting data from database"));
    
  }

  deleteSubscriptionsById(userId,vendorId) {
  	return this.http.delete(Subscribe.deleteCarryBagUrl+userId+"/"+vendorId, { headers: this.headers })
    .map(data => data.status,
    (error: any)=>console.log(error + "error in deleting offer"));
  }


}
