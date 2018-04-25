import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Offerslist } from './../configs/offers.config';

@Injectable()
export class OffersService {

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json'});

  getOffers(vendorId:string) {
    return this.http.get(Offerslist.getOfferlistUrl+vendorId+"/offers")
    .map(data => data.json(),
      (error: any)=>console.log("error in getting data from database"));
  }

  getAddress(street,city,state,zip){
    return this.http.get(Offerslist.getAddressUrl+street+city+state+zip+"&key="+"AIzaSyBeSuJbAPirjvZ0mEDxd-g05P5_f6gkAlQ")
    .map(data => data.json(),
      (error: any)=>console.log("error in getting data from database"));
  }


}
