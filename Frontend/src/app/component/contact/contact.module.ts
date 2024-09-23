// src/app/Experience/Experience.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageNomComponent } from '../ImageNom/imagenom.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../shared.module';
import { ContactComponent } from './contact.component';
import { NavbarComponent } from '../navbar/navbar.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
  ],
  exports: [
  ],
})
export class ContactModule { }
