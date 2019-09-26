import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './app/Layout/nav/nav.component';
import { AboutComponent } from './app/Layout/about/about.component';
import {HomeComponent} from './app/Layout/home/home.component';
import { FooterComponent } from './app/Layout/footer/footer.component';
import { AdmissionComponent } from './app/Layout/admission/admission.component';
import { OnlineApplicationComponent } from './app/Layout/online-application/online-application.component';
import { EventsComponent } from './app/Layout/events/events.component';
import { ContactComponent } from './app/Layout/contact/contact.component' ;
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap' ;
 


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    AdmissionComponent,
    OnlineApplicationComponent,
    EventsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    NgbModule
    
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
