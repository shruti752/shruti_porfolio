import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { LoginserviceService } from './loginservice.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LogincomponentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    LogincomponentComponent
  ],
  providers:[
    LoginserviceService
  ]
})
export class LoginModule { }
LogincomponentComponent