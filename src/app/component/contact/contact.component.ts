import { Component,OnInit } from '@angular/core';
import AOS from 'aos';
import { faHome, faUser, faBriefcase, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
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

