import { Component, OnInit } from '@angular/core';
import { CarrybagService } from '../../../services/carrybag.service';


@Component({
  selector: 'app-carrybag',
  templateUrl: './carrybag.component.html',
  styleUrls: ['./carrybag.component.css'],
  providers:[CarrybagService]

})
export class CarrybagComponent implements OnInit {
  couponId:any;
  userId:String="megha@gmail.com";
  offerId:String;
  rating:number;
  feedback:String;
  obj={};
  data:any;
  flag:boolean;

  constructor(private carrybagService: CarrybagService) { }
  priceAfterDiscount: any;

  productPrice(offerOriginalPrice,offerDiscount){
  	this.priceAfterDiscount = (offerOriginalPrice)*(1-(offerDiscount)/100);
  }

  ngOnInit()
  {
  	this.getCarrybag();
  }
  public carryBagOffers=[];

  getCarrybag() {
    this.carrybagService.getCarrybaglist(this.userId).subscribe((res) =>{
      this.carryBagOffers = res;
    }, (error) =>{console.log("error");
      })
  }
  deleteOffer(offerId){
    this.carrybagService.deleteCarrybag(offerId).subscribe((res) =>{
    	this.getCarrybag();
      }, (error) =>{
        alert(error + "deleting restaurant does not works");
      })
  }


  couponGenerate(userId,offerId){
    this.carrybagService.validateCoupon(userId,offerId).subscribe((res) =>{
      this.data=res;
      alert(this.data.couponId);
    }, (error) =>{console.log("error");
      })


    let user=this.carryBagOffers.find(ele=>ele.userId===userId);
    this.couponId=Math.floor(Math.random()*100000);
    alert(this.data);
    this.obj={
                "couponId" :this.couponId,
                "userId"  :user.userId,
                "offerId" :user.offerId,
                "vendorValidationFlag" : true,
                "rating" :"null",
                "feedback" :"null"
              } 
              this.carrybagService.newCouponGenerate(this.obj).subscribe((res) =>{

              }, (error) =>{
        
              })

          }

  addfeedback(offerId, userId) {

    this.carrybagService.validateCoupon(userId,offerId).subscribe((res) =>{
      this.data=res;
    }, (error) =>{console.log("error");
      })
      if(this.data.feedback==null){
    let user=this.carryBagOffers.find(ele=>ele.userId===userId);
    this.obj={
      "couponId" : "29079",
      "userId"  :"user.userId",
      "offerId" :user.offerId,
      "vendorValidationFlag" : true,
      "rating" :this.rating,
      "feedback" :this.feedback
    } 
    this.carrybagService.updateFeedback(this.obj).subscribe((res) =>{

    }, (error) =>{

    })
  }
  else {
    alert("feedback already done");
  }
  } 
  
  checkFeedbackExistence(offerId, userId) {

    this.carrybagService.validateCoupon("jhvjnbv",offerId).subscribe((res) =>{
      this.data=res;
      alert(this.data);
      console.log(this.data.feedback);
    }, (error) =>{console.log("error");
      })
      if(this.data.feedback=null){
        this.flag=true;

  }  else {
    this.flag=false;
  }
  console.log(this.flag);
  } 
}
