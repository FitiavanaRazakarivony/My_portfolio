// src/app/Experience/Experience.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { ExperienceRoutingModule } from './experience-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ExperienceComponent,
    ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    FontAwesomeModule,
    SharedModule,
    MatTooltipModule,
    MatButtonModule

  ],

})
export class ExperienceModule { }
