import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../../../services/subscribe.service';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css'],
  providers:[SubscribeService]
})

export class SubscriptionListComponent implements OnInit {
  User:any={};

  constructor(private subscribeService:SubscribeService ) { }

  ngOnInit() {
    this.getAllSubscriptions();
  }
  public subscribeServiceList=[];

  getAllSubscriptions(){
    this.subscribeService.getAllDetails().subscribe((res) =>{
     console.log(res);
     this.subscribeServiceList=res;
    },
     (error) =>{
        alert(error + "deleting restaurant does not works");
      })
  }


  deleteSubscriptions(userId,vendorId){
    this.subscribeService.deleteSubscriptionsById(userId,vendorId).subscribe((res) =>{
    	console.log("calling get after delete");
    	this.getAllSubscriptions();
      }, (error) =>{
        alert(error + "deleting restaurant does not works");
      })
  }
}
