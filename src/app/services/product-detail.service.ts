import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Product } from '../configs/product.config';

@Injectable()
export class ProductDetailService {

 constructor(private http : Http) { }

 private headers = new Headers({ 'Content-Type': 'application/json'});

  // Function to get customer name and make service call to get customer name from App
  searchProduct(vendorId) {
    return this.http.get(Product.mapping+vendorId+"/offers")
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }
   private handleError(error: Response){
     return Observable.throw(error.statusText);
   }
 }