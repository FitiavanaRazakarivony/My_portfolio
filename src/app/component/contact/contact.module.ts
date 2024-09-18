// src/app/Experience/Experience.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageNomComponent } from '../ImageNom/imagenom.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../shared.module';
import { ContactComponent } from './contact.component';


@NgModule({
  declarations: [
    ContactComponent,
    ImageNomComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule
  ],

})
export class ContactModule { }
