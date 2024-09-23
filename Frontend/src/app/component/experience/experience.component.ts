import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faCode, faPalette, faDatabase, faTasks } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  faCode= faCode
  faPalette = faPalette
  faDatabase = faDatabase
  faTasks = faTasks

  openGithub_stage1(): void {
    window.open('https://github.com/FitiavanaRazakarivony/Creation_du_site_Web_Value_IT', '_blank');
  }
  openGithub_stage2(): void {
    window.open('https://github.com/FitiavanaRazakarivony/Gestion-stock-multi-tache', '_blank');
  }
  constructor(private _formBuilder: FormBuilder) {}
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
}
