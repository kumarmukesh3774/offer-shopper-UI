import { Component, OnInit } from '@angular/core';
import{UserService} from './../../../services/user.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private userdata:UserService) { }

  data:any;
  firstName:string;
  lastName:string;
  phone:string;
  emailId:string;
  street:string;
  city:string;
  zip:number;
  state:string;
  obj={};

  ngOnInit() {
    //getUserdata(){
     this.userdata.getProfile().subscribe((res) =>{
     this.obj=res;
     console.log(res);
     this.data = res;
     this.firstName=this.data.firstName;
     this.lastName=this.data.lastName;
     this.phone=this.data.mobileNo;
     this.emailId=this.data.email;
     this.street=this.data.address.street;
     this.city=this.data.address.city;
     this.zip=this.data.address.zipCode;
     this.state=this.data.address.state;
     },(error) =>{
     })
    //}
  }

  undisableTxt() {
  (<HTMLInputElement>document.getElementById("firstName")).disabled= false;
  (<HTMLInputElement>document.getElementById("lastName")).disabled = false;
  (<HTMLInputElement>document.getElementById("phone")).disabled = false;
  (<HTMLInputElement>document.getElementById("inputAddress")).disabled = false;
  (<HTMLInputElement>document.getElementById("inputCity")).disabled = false;
  (<HTMLInputElement>document.getElementById("inputZip")).disabled = false;
  (<HTMLInputElement>document.getElementById("inputState")).disabled = false;
};

submit(){
  console.log(this.firstName);
  this.obj={
"id":"5acdf4cd001c48514311a76a",
"firstName":this.firstName,
"lastName":this.lastName,
"password":null,
"mobileNo":this.phone,
"email":"rajneesh@gmail.com",
"dob":"1/4/77",
"address":{
"street":this.street,
"city":this.city,
"state":this.state,
"zipCode":this.zip
},
"gender":"f",
"spinCount":2,
"creditPoint":0,
"shopAddress":{
"street":"dsdf",
"city":"esgf",
"state":"fgfa",
"zipCode":155501
},
"vendorMobileNo":"55666456",
"timestamp":"dgjkshdbh"
}
    this.userdata.putProfile(this.obj).subscribe((res) =>{

      }, (error) =>{

      })


}
}
