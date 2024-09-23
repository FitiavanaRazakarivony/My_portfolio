import { Component,OnInit } from '@angular/core';
import AOS from 'aos';
import { faHome, faUser, faBriefcase, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})

export class ContactComponent implements OnInit  {
  isLoading: boolean = false;

  faHome = faHome;
  faUser = faUser;
  faBriefcase = faBriefcase;
  faEnvelope = faEnvelope;
  faCode = faCode;
  message: string = '';

  ngOnInit(): void {
    AOS.init({disable:'mobile'});
    AOS.refresh();
  }

  emailData = {
    to: 'fitiavanarazakarivony00@gmail.com',
    subject: '',
    text: ''
  };

  constructor(private emailService: ContactService) {}

  sendEmail() {
    this.isLoading = true; // Activer le loader avant l'envoi
    this.emailService.sendEmail(this.emailData).subscribe(
      response => {
        this.isLoading = false;
        this.message = 'Email envoyé avec succès !';
      },
      error => {
        this.isLoading = false; // Désactiver le loader
        this.message = 'Erreur lors de l\'envoi de l\'email.';
      }
    );
  }
}

