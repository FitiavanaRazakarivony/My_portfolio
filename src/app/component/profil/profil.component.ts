import { Component,OnInit } from '@angular/core';
import AOS from 'aos';
import { faEnvelope, faPhone, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
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