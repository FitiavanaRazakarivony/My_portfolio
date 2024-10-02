import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './component/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './component/accueil/accueil.component';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './component/profil/profil.component';
import { SharedModule } from './shared.module';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './component/loader/loader.component';
import { CursorTrackerComponent } from './cursor-tracker/cursor-tracker.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    FormsModule,
  
  ],
  declarations: [
    AppComponent,
    AccueilComponent,
    LoaderComponent,
    CursorTrackerComponent
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

