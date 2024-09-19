import { Component,OnInit } from '@angular/core';
import AOS from 'aos';
import { faEnvelope, faPhone, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImageNomComponent } from '../ImageNom/imagenom.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css',
  standalone: true,
  imports: [
    NavbarComponent,
    ImageNomComponent, // Ajoute le composant ici
    FontAwesomeModule,
    CommonModule,
  ],
})

export class ProfilComponent implements OnInit {

  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarkerAlt = faMapMarkerAlt;
  faUser = faUser;

  ngOnInit(): void {
    AOS.init({disable:'mobile'});
    AOS.refresh();    
  }
  
  downloadCV() {
    window.open('assets/CV_Fitiavana.pdf', '_blank');
  }

}