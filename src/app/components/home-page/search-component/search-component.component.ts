import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css'],
  providers: [SearchService]
})

export class SearchComponentComponent implements OnInit {

  //event created to pass category and query to parent class
  @Output() success = new EventEmitter<any>();

  public results:any=[];
  public products:any=[];
  name:String;

  val = new Subject<string>();
  flag :boolean;
  searchTerm$ = new Subject<string>();

  category : string;
  query : string;

  constructor(private searchService: SearchService) {
    //searching the keyword in redis database
    if(this.searchTerm$){
    this.searchService.search(this.searchTerm$)
      .subscribe(res => {
        this.results = res;
        if(res!="default")
        {
          this.flag=true;
       }
        else{
          this.flag=false;
        }
      });
    }
}

  ngOnInit() {
    this.category = 'All';
  }

  showValue() : void {
   this.searchService.searchProducts(this.query)
   .subscribe(res => {
     this.products = res;
   });
   this.flag=false;
    this.success.emit({
      'query' : this.query,
      'category' : this.category
    });
  }

  // for the search to work even on pressing enter
  /*
  onPressEnter(event) {
    if(event.keyCode == 13) {
      document.getElementById("searchButton").click();
    }
  }
  */

  //searching the products in backend
  onclick(result) {
    this.query=result;
    this.searchService.searchProducts(result)
    .subscribe(res => {
      this.products = res;
    });
    this.flag=false;
  }
}