import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faCode, faPalette, faDatabase, faTasks } from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImageNomComponent } from '../ImageNom/imagenom.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    ImageNomComponent, // Ajoute le composant ici
    FontAwesomeModule,
    CommonModule,
  ],
})
export class ExperienceComponent {

  faCode= faCode
  faPalette = faPalette
  faDatabase = faDatabase
  faTasks = faTasks

  constructor(private _formBuilder: FormBuilder) {}
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
}
