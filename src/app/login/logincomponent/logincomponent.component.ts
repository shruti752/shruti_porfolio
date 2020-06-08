import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { LoginFile } from '../loginfile';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.scss']
})
export class LogincomponentComponent implements OnInit {
 
 response : LoginFile = new LoginFile("","","","");
  message1:string;
 message :any;
 userName  = this.response.userName
password = this.response.password;
iscollapsed:boolean=true;

 
  // constructor(private loginService : LoginserviceService) { }
  constructor(private http : HttpClient) { }

  ngOnInit() {
   
  }

  loginButton(){
      // this.loginService.getUserData(this.response)
      this.http.get('http://localhost:8080/createprofile/' +this.userName + this.password)
      .subscribe((data)=> {
      this.message = data;
      console.log(this.message);
    });
  }
  collapse(){
    this.iscollapsed = !this.iscollapsed;
  }
  logoutButton(){
    this.message1="logout successfully";
  }

}

