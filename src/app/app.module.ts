import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { CertificationComponent } from './certification/certification.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { TruncatePipe } from './truncate.pipe';
import { EducationComponent } from './education/education.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LoginModule } from './login/login.module';
// import { LoginserviceService } from './login/loginservice.service';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    SkillComponent,
    CertificationComponent,
    PortfolioComponent,
    ContactComponent,
    TruncatePipe,
    EducationComponent,
    BlogsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
  ],
  providers: [
   TruncatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
