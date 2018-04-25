import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [SearchService]
})
export class ProductsListComponent implements OnInit {

  @Input() results: any;
  public products:any=[];


  constructor(private searchService : SearchService) { }

  ngOnInit() {
  }

  //searching the products in backend
  searchResults(result) {
    this.searchService.searchProducts(result)
    .subscribe(res => {
      this.products = res;
    });
  }
}
