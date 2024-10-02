// src/app/Experience/Experience.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../shared.module';
import { ProfilComponent } from './profil.component';
import { ExperienceRoutingModule } from '../experience/experience-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { ProfilRoutingModule } from './profil-routing.module';


@NgModule({
  declarations: [
    ProfilComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    FontAwesomeModule,
    SharedModule,   
    MatTooltipModule,
    MatButtonModule
  ],
  exports: [
  ],
})
export class ProfilModule { }
