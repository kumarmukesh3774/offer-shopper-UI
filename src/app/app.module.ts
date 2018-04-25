import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { SharedComponent } from './components/shared/shared.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavbarComponent } from './components/shared/header/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { SearchComponentComponent } from './components/home-page/search-component/search-component.component';
import { ProductsHeaderComponent } from './components/home-page/products-header/products-header.component';
import { ProductsListComponent } from './components/home-page/products-list/products-list.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { SearchSideBarComponent } from './components/shop-page/search-side-bar/search-side-bar.component';
import { SearchResultsComponent } from './components/shop-page/search-results/search-results.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { UserComponent } from './components/user/user.component';
import { VendorPageComponent } from './components/vendor-page/vendor-page.component';
import { CarrybagComponent } from './components/user/carrybag/carrybag.component';
import { WishlistComponent } from './components/user/wishlist/wishlist.component';
import { AddOfferComponent } from './components/user/add-offer/add-offer.component';
import { UserdetailsComponent } from './components/user/userdetails/userdetails.component';
import { LocationComponent } from './components/shared/header/location/location.component';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { UserService } from './services/user.service';
import { OffersService } from './services/offers.service';
import { WishlistService } from './services/wishlist.service';
import { CarrybagService } from './services/carrybag.service';
import { AddOfferService } from './services/add-offer.service';
import { LoginRegisterFrontpageComponent } from './components/login-register/login-register-frontpage.component';
import { SearchService } from './services/search.service';
import { SubscriptionListComponent } from './components/user/subscription-list/subscription-list.component';
import { AuthorizationService } from './services/authorization.service';

const appRoutes:Routes=[

  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomePageComponent },
  { path:'user/:param',component:UserComponent },
  { path:'login',component:LoginRegisterFrontpageComponent },
  { path:'product/:id',component: ProductPageComponent},
 /* { path:'vendorInfo',component: VendorPageComponent},*/
  { path:'vendorInfo/:id',component: VendorPageComponent},
  //{path:'',redirectTo:'/sidebar' ,pathMatch:'full'},
  //{path:'**',redirectTo:'/sidebar' ,pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    SearchComponentComponent,
    ProductsHeaderComponent,
    ProductsListComponent,
    ShopPageComponent,
    SearchSideBarComponent,
    SearchResultsComponent,
    ContactUsComponent,
    UserComponent,
    LocationComponent,
    CarrybagComponent,
    UserdetailsComponent,
    ProductPageComponent,
    WishlistComponent,
    LoginRegisterFrontpageComponent,
    SubscriptionListComponent,
    VendorPageComponent,
    AddOfferComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
     apiKey: 'AIzaSyBeSuJbAPirjvZ0mEDxd-g05P5_f6gkAlQ'
   })
  ],
  providers: [UserService, WishlistService, CarrybagService, SearchService, OffersService, AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
