import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImageNomComponent } from './component/ImageNom/imagenom.component';


@NgModule({
  declarations: [
    ImageNomComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports: [
    ImageNomComponent,
    NavbarComponent
  ]

})
export class SharedModule { }
