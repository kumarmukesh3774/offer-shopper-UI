import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userList;
  public login;

  constructor( 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    /*let id = this.route.snapshot.params['id'];
    this.sub=id;*/
    this.route.paramMap.subscribe(params => {
    this.userList = params.get('param');
  });
  }

  go(idSelected) {
      this.router.navigate(['/userprofile',idSelected])
    }
}
