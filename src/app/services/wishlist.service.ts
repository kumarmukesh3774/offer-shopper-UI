import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';

import { Wishlist } from './../configs/wishlist.config';

@Injectable()
export class WishlistService {

  constructor(private http: Http) { }

  /*getWishlist(){
    return this.http.get(Wishlist.getWishlistUrl+"12345")
    .map(data => data.json(),
    (error: any)=>console.log("error in getting data from database"));
  }*/

  /*deleteRestaurant(offerId,userId) {  	
  	return this.http.delete(Wishlist.deleteWishlistUrl+offerId+"/"+userId, { headers: this.headers })
    .map(data => data.status,
      (error: any)=>console.log(error + "error in deleting offer"));
  }
  */
  token = localStorage.getItem("application-token");
  // private headers = new Headers({ 'Content-Type': 'application/json'});
  getWishlist(){
    console.log(localStorage.getItem("application-token"));
    const httpOptions = {
      headers: new Headers({
        'application-token': localStorage.getItem("application-token")
      })
    };

    const options = new RequestOptions({
      headers: httpOptions.headers
    });

    /*let headers = new Headers();
    headers.append('application-token', localStorage.getItem("application-token"));
    let opts = new RequestOptions();
    opts.headers = headers;*/

    return this.http.get(Wishlist.getWishlistUrl+"12345", options)
    .map(data => data.json(),
      (error: any)=>console.log("error in getting data from database"));
  }
}