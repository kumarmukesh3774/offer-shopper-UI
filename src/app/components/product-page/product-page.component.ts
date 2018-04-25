import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from './../../services/product-detail.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  providers:[ProductDetailService]
})

export class ProductPageComponent implements OnInit {

  vendorId:string;

 @Output() success = new EventEmitter<any>();
    public searchedProduct: string;
    public productName : string;
     public productDescription : string;
     public productValidity :string;
     public offer :any;

  constructor(
    private productDetailService : ProductDetailService,
    private route: ActivatedRoute
    ) { }

 ngOnInit() {
   this.vendorId=this.route.snapshot.params.id;
   this.searchProduct();
 }

 // Function to get customer name and make service call to get customer name from app
  searchProduct(){
      this.productDetailService.searchProduct(this.vendorId)
      .subscribe((res) =>{
        this.offer=res[0];
      this.productName=res[0].offerTitle;
      this.productDescription=res[0].offerDescription;
      this.productValidity=res[0].offerValidity;
      console.log(res[0].offerTitle);
       },(error) =>{

      });
  }
}