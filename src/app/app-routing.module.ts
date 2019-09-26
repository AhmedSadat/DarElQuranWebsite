import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './app/Layout/about/about.component';
import { HomeComponent } from './app/Layout/home/home.component';
import { AdmissionComponent } from './app/Layout/admission/admission.component';
import { OnlineApplicationComponent } from './app/Layout/online-application/online-application.component';
import { ContactComponent } from './app/Layout/contact/contact.component';
import { EventsComponent } from './app/Layout/events/events.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  // {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'admission' , component:AdmissionComponent},
  {path:'online' , component:OnlineApplicationComponent},
  {path:'contact' , component:ContactComponent},
  {path:'events' , component:EventsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
