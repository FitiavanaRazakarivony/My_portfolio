import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImageNomComponent } from './component/ImageNom/imagenom.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ImageNomComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports: [
    NavbarComponent ,// Exportez le composant pour qu'il soit utilisé dans d'autres modules
    ImageNomComponent
  ]

})
export class SharedModule { }

