import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from '../../services/offers.service';

@Component({
  selector: 'app-vendor-page',
  templateUrl: './vendor-page.component.html',
  styleUrls: ['./vendor-page.component.css'],
  providers:[OffersService]
})

export class VendorPageComponent implements OnInit {

  lat: number;
  lng: number;
  offersList:Array<{}>=[];
  priceAfterDiscount: any;
  shopName:string;
  address:any;
  data:any;
  street:string;
  city:string;
  zip:number;
  state:string;
  vendorId:string;

  constructor(
    private offersService: OffersService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.vendorId=this.route.snapshot.params.id;
    this.getOfferlist();
 }
 

 productPrice(offerOriginalPrice,offerDiscount){
   this.priceAfterDiscount = (offerOriginalPrice)*(1-(offerDiscount)/100);
 }
 getOfferlist() {
   this.offersService.getOffers(this.vendorId).subscribe((res) =>{
     this.data = res;     
     this.shopName=this.data.address.name.toUpperCase()
     this.street=this.data[0].address.street.toUpperCase();
     this.city=this.data[0].address.city.toUpperCase();
     this.zip=this.data[0].address.zipCode;
     this.state=this.data[0].address.state.toUpperCase();
     this.initMap();
   }, (error) =>{
   })
 }
 initMap(){
   this.offersService.getAddress(this.street,this.city,this.state,this.zip).subscribe((res) =>{
     this.address = res;
     this.lat=(this.address.results[0].geometry.location.lat);
     this.lng=(this.address.results[0].geometry.location.lng);
   }, (error) =>{
   })
 }

}