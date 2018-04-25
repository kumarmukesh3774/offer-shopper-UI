import { Component, OnInit } from '@angular/core';
import { AddOfferService } from '../../../services/add-offer.service';
import { FormsModule} from '@angular/forms';

@Component({
	selector: 'app-add-offer',
	templateUrl: './add-offer.component.html',
	styleUrls: ['./add-offer.component.css'],
	providers:[ AddOfferService ]
})

export class AddOfferComponent implements OnInit {
	offerId:String ;
	userId: String ;
	dateOfAnnouncement:DateTimeFormat;
	offerCategories:String;
	offerValidity:DateTimeFormat;
	discount:number;
	keywords:String;
	offerDescription:String;
	offerTerms:String;
	offerTitle:String;
	originalPrice:number;
	city:String;
	state:String;
	street:String;
	zipCode:number;
	name:String;
	number:String;
	offerRating:String;

	obj={};
	User:any={};

	constructor(private addOfferService: AddOfferService) { }

	ngOnInit()
	{
		this.getOffers();
	}

	public offers=[];

	getOffers() {
		console.log("ksdjk");
		this.addOfferService.getOffersList().subscribe((res) =>{
			console.log("ksdjk");
			this.offers = res;
			console.log(this.offers);
		}
		, (error) =>{console.log("error");
	})
	}

	deleteOffer(offerId){
		this.addOfferService.deleteOffer(offerId).subscribe((res) =>{
			this.getOffers();
		}, (error) =>{
			alert(error + "deleting restaurant does not works");
		})
	}



	updateOffer(offerId){
		let user=this.offers.find(ele=>ele.offerId===offerId);
		this.User=user;
		this.offerCategories=user.offerCategories;
		this.discount=user.discount;
		this.keywords=user.keywords;
		this.offerValidity=user.offerValidity;
		this.offerDescription=user.offerDescription;
		this.offerTerms=user.offerTerms;
		this.offerTitle=user.offerTitle;
		this.originalPrice=user.originalPrice;
	}

	submit(){
		this.obj={
			"offerId" :this.User.offerId,
			"userId"  :this.User.userId,
			"offerTitle" :this.offerTitle,
			"offerValidity" :this.offerValidity,
			"dateOfAnnouncement" :this.User.dateOfAnnouncement,
			"address" :this.User.address,
			"offerDescription" :this.offerDescription,
			"originalPrice" :this.originalPrice,
			"discount" :this.discount,
			"offerRating" :this.User.offerRating,
			"offerCategories" :this.offerCategories,
			"offerTerms" :this.offerTerms,
			"keywords" :this.keywords
		}
		this.addOfferService.putOffer(this.obj).subscribe((res) =>{
			this.getOffers();

		}, (error) =>{

		})
	}

	addOffer(){
		console.log(this.number);
		this.obj={
			"offerId" :"null",
			"userId"  :this.offers[0].userId,
			"offerTitle" :this.offerTitle,
			"offerValidity" :this.offerValidity,
			"dateOfAnnouncement" :this.offers[0].dateOfAnnouncement,
			"address" :this.offers[0].address,
			"offerDescription" :this.offerDescription,
			"originalPrice" :this.originalPrice,
			"discount" :this.discount,
			"offerRating" :0,
			"offerCategories" :this.offerCategories,
			"offerTerms" :this.offerTerms,
			"keywords" :this.keywords
		}
		this.addOfferService.addNewOffer(this.obj).subscribe((res) =>{
			this.getOffers();

		}, (error) =>{

		})
	}

}
