import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillComponent } from './skill/skill.component';
import { CertificationComponent } from './certification/certification.component';
import { ContactComponent } from './contact/contact.component';
import { LogincomponentComponent } from './login/logincomponent/logincomponent.component';
import { CommonModule } from '@angular/common';



const routes: Route [] = [
// {path:'' , redirectTo :'/Home', pathMatch : 'prefix'},
{path:"login",component:LogincomponentComponent},
// {path:"",component:LogincomponentComponent},
{path:"Home",component:HomeComponent},
{path:"About",component:AboutComponent},
{path:"Skills",component:SkillComponent},
{path:"Certification",component:CertificationComponent},
{path:"Contact",component:ContactComponent},


];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
