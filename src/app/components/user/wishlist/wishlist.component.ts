import { Component, OnInit} from '@angular/core';
import { WishlistService } from '../../../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  providers:[WishlistService]
})
export class WishlistComponent implements OnInit {

  constructor(private wishlistService: WishlistService) { }

  priceAfterDiscount: any;

  ngOnInit() {
  	this.getWishlist();
  }
  public wishlistOffers=[];

  productPrice(offerOriginalPrice,offerDiscount){
  	this.priceAfterDiscount = (offerOriginalPrice)*(1-(offerDiscount)/100);
  }
  getWishlist() {
    this.wishlistService.getWishlist().subscribe((res) =>{
      this.wishlistOffers = res;
      }, (error) =>{
      })
  }
  // deleteOffer(offerId,userId){
  //   this.wishlistService.deleteRestaurant(offerId,userId).subscribe((res) =>{
  //   	this.getWishlist();
  //     }, (error) =>{
  //       alert(error + "deleting restaurant does not works");
  //     })
  // }
}
