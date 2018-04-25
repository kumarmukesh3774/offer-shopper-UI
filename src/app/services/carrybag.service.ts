import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Carrybag} from './../configs/carrybag.config';

@Injectable()
export class CarrybagService {

  constructor(private http: Http) { }


  private headers = new Headers({ 'Content-Type': 'application/json'});

  getCarrybaglist(userId){
    return this.http.get("http://10.151.61.122:9004/bag/userId/"+userId)
    .map(data => data.json(),
    (error: any)=>console.log("error in getting data from database"));
    
  }

  deleteCarrybag(offerId) {
  	return this.http.delete(Carrybag.deleteCarryBagUrl+offerId, { headers: this.headers })
    .map(data => data.status,
    (error: any)=>console.log(error + "error in deleting offer"));
  }

  newCouponGenerate(obj){

    return this.http.post(Carrybag.generateCouponUrl,obj, {headers: this.headers})
     .map(data => data.json(),
   (error: any)=>console.log("error"));
 }

 validateCoupon(userId,offerId){

  let arr= this.http.get(Carrybag.getCouponIdUrl+"userId/"+"kiu"+"/offerId/"+offerId)
  .map(data => data.json(),
  (error: any)=>console.log("error in getting data from database"));
  return arr;
  
}

updateFeedback(obj){
  return this.http.post(Carrybag.generateCouponUrl, obj, {headers: this.headers})
  .map(data => data.json(),
  (error: any)=>console.log("error in getting data from database"));
}

}
