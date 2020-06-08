import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginFile } from './loginfile';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  loginComponent:LogincomponentComponent;
  userName = this.loginComponent.userName;
  password = this.loginComponent.password;


  // constructor(private http : HttpClient) { }

  ngOnInit(){
  }

  // getUserData(response) : Observable<any>{
  //   return this.http.get('http://localhost:8080/createprofile'+this.userName + this.password,response) ;
  // }
}
