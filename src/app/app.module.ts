import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './component/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { ExperienceComponent } from "./component/experience/experience.component";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './component/accueil/accueil.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsComponent } from './icons/icons.component';
import { ImageNomComponent } from './component/ImageNom/imagenom.component';
import { ProfilComponent } from './component/profil/profil.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    FontAwesomeModule  
  ],
  declarations: [
    AppComponent,
    ContactComponent,
    ExperienceComponent,
    NavbarComponent,
    AccueilComponent,
    ExperienceComponent,
    IconsComponent,
    ImageNomComponent,
    ProfilComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
