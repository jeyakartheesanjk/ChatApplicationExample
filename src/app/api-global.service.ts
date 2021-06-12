import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceApiService } from './service/service-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGlobalService {

  configuration: any;
  // tslint:disable-next-line:variable-name
  get_user: any;
  get_book: any;
  login: any;
  // tslint:disable-next-line:variable-name
  constructor(private http: HttpClient) {

    this.configuration = ServiceApiService.settings;
    console.log(this.configuration.global.domain_name);
    console.log(this.configuration.global.port_number);
    this.login='http://jeyakartheesan.tech/appTestApiExample/login.php';
    this.get_user = 'http://jeyakartheesan.tech/appTestApiExample/example1.php';
   // this.get_book = this.configuration.global.domain_name + this.configuration.global.port_number + '/api/lib/get_book_details';
  }
  // tslint:disable-next-line:variable-name max-line-length
  get_book_details() {
    console.log(this.configuration.global.domain_name);
    console.log(this.configuration.global.port_number);
    return this.http.get(this.get_user);
  }
  login_fun( user_id:string,user_password:string): Observable<any>
  {

  return this.http.post<any>(this.login, { user_id: `${user_id}`, user_password: `${user_password}` },{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

}





