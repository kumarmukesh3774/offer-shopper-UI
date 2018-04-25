import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../../services/authorization.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	providers:[ AuthorizationService ]
})
export class HeaderComponent implements OnInit {

	login:boolean = false;
	token:any;
	userId: string;
	userInfo: string;

	constructor( 
		private router: Router,
		private authorizationService: AuthorizationService 
		) { }


	ngOnInit() {
		this.isLogin();
	}

	isLogin(){		
		this.login = this.authorizationService.isLogin();
		this.getUserId();		
	}

	logout(){
		this.authorizationService.logout();
		window.location.assign("/homepage");
	}

	getUserId() {		
		this.authorizationService.getUserId().subscribe((res) =>{
			this.userInfo = res;
			console.log(this.userInfo);
		}, (error) =>{
		})
	}
}
