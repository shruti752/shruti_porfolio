import { Component, OnInit, Input } from '@angular/core';
import { TruncatePipe } from '../truncate.pipe';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent  {
  fullIntro : string;
  limit:boolean;
   intro="I am Shruti. I completed BTech in Computer science and engineering from GNIOT College I am oracle certified associate in java 1.8 version.i am very well versed with core java with 1.8 and J2EE technology such as Spring,SpringBoot,Webservices(SOAP & RESTFul),Also i have pretty good knowledge of frontend Application such as javascript,typescript,AngularJs 6,HTML,CSS.I did one project of library management in my university. Also developed social media application using RESTFul Webservices and SpringBoot framework.";
  // value :"I am Shruti. I completed BTech in Computer science and engineering from GNIOT College I am oracle certified associate in java 1.8 version.i am very well versed with core java with 1.8 and J2EE technology such as Spring,SpringBoot,Webservices(SOAP & RESTFul),Also i have pretty good knowledge of frontend Application such as javascript,typescript,AngularJs 6,HTML,CSS.I did one project of library management in my university. Also developed social media application using RESTFul Webservices and SpringBoot framework."



  // constructor(private truncatePipe : TruncatePipe) { 
   
  // }

  // ngOnInit():void {
  //   this.fullIntro = this.intro;  
  //   this.intro = this.truncatePipe.transform(this.intro,[100])
  // }

  // showFullIntro(){
  //  this.intro = this.fullIntro;
  // }
 

}
