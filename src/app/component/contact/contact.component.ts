import { Component,OnInit } from '@angular/core';
import AOS from 'aos';
import { faHome, faUser, faBriefcase, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImageNomComponent } from '../ImageNom/imagenom.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],  
  standalone: true,
  imports: [
    NavbarComponent,
    FontAwesomeModule,
    CommonModule,
    ImageNomComponent
  ],
})

export class ContactComponent implements OnInit  {

  faHome = faHome;
  faUser = faUser;
  faBriefcase = faBriefcase;
  faEnvelope = faEnvelope;
  faCode = faCode;

  ngOnInit(): void {
    AOS.init({disable:'mobile'});
    AOS.refresh();
  }
}