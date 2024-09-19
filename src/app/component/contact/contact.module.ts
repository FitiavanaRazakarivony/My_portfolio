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
    ContactComponent,
    ImageNomComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
  ],
  exports: [
    ContactComponent // Optionally export if needed in other modules
  ],
})
export class ContactModule { }
