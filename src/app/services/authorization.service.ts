import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthorizationService {

	constructor(
		private router: Router,
		private http: Http
		) { }

	getToken() {
		let token=localStorage.getItem("application-token");
		if(!token) {
			return this.router.navigate(['/','login']);
		}
		return token;
	}

	isLogin() {
		let token=localStorage.getItem("application-token");
		if(!token) {
			return false;
		}
		return true;
	}

	getUserId() {
		let token=localStorage.getItem("application-token");
		return this.http.get("http://10.151.61.152:8765/api/uaa-server/verifytoken/"+"eyJraWQiOiJrMSIsImFsZyI6IlJTMjU2In0.eyJpc3MiOiJPZmZlclNob3BwZXIiLCJhdWQiOiJPZmZlclNob3BwZXJVc2VyIiwiZXhwIjoxNTI0NjExNTg0LCJqdGkiOiJOa0VzRzQ5RklCWHRRMlJCWVFrWjJ3IiwiaWF0IjoxNTI0NTk5NTg0LCJuYmYiOjE1MjQ1OTk0NjQsInN1YiI6IkN1c3RvbWVyIiwidXNlcm5hbWUiOiJhYmNAYWJjZCJ9.EEZvfynPLoREK-kDpVBflFekxUHge1v0sUiZeEker2hTreZY_AMdma-iDJ6zmHcGhuEy6zytaC8Xdr2oBZ-qVDBwDyhFFlXK5lYa0qPTQirWjwFkLyioGhf1UxsCAIdr6ZmK46oXLUdO0wHLIcj2XnlRtu_CgWqlMEJAqedrtY2QrqSfLk6hDeXt1VZXBajxjPZJwZrikw5kHCuxTbQOXTf7F5CVnqYTUrwbmRioHt8g0pW4XKxJsp7ovR8PMSQcK43mf7DhZKuI84enUMEOkC9gcjPvXxC_6RNYSuJpzBDkn-n1D3JuGuyFZyURTvINdb6NjfqDMKauRcwPFZ3U1Q")
    .map(data =>data.toString(),
      (error: any)=>console.log("error in getting data from database"));
	}

	logout() {
		localStorage.removeItem("application-token");
		localStorage.removeItem("userId");
	}
}


/*true, role, emailId*/