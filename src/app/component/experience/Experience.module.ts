// src/app/Experience/Experience.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { ExperienceRoutingModule } from './experience-routing.module';
import { IconsComponent } from '../../icons/icons.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImageNomComponent } from '../ImageNom/imagenom.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ExperienceComponent, IconsComponent,NavbarComponent,ImageNomComponent],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    FontAwesomeModule

  ],

})
export class ExperienceModule { }
