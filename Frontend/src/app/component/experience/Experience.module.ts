// src/app/Experience/Experience.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { ExperienceRoutingModule } from './experience-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../shared.module';


@NgModule({
  declarations: [
    ExperienceComponent,
    ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    FontAwesomeModule,
    SharedModule,
  ],

})
export class ExperienceModule { }
