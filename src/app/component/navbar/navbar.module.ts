// src/app/Experience/Experience.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsComponent } from '../../icons/icons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../shared.module';


@NgModule({
  declarations: [IconsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule
  ],

})
export class NavbarModule { }
