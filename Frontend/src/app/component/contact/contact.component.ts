import { Component,OnInit } from '@angular/core';
import AOS from 'aos';
import { faHome, faUser, faBriefcase, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import { ContactService } from './contact.service';
import Swal from 'sweetalert2';
import { LoaderService } from '../loader/loader.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})

export class ContactComponent implements OnInit {
  options = ['Stage', 'Recruter', 'Autre'];
  selectedOption: string | null = null;
  // Fonction pour gérer le changement de sélection
  onOptionChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedOption = selectElement.value;
    console.log('Option sélectionnée:', this.selectedOption);
  }

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
    to: '',
    subject: '',
    text: ''
  };

  constructor(
    private emailService: ContactService,
    private loaderService : LoaderService
  ) {}

  sendEmail() {
    // this.isLoading = true; // Activer le loader avant l'envoi
    this.loaderService.showLoader()

    this.emailService.sendEmail(this.emailData).subscribe(
      response => {
        // this.isLoading = false; // Désactiver le loader
        this.loaderService.hideLoader()
        this.valider();
      },
      error => {
        // this.isLoading = false; // Désactiver le loader
        this.loaderService.hideLoader()

        this.erreur();
      }
    );
  }
  valider(){
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 2000,
    });
    Toast.fire({
      icon: "success",
      title: "Email envoyé avec succès !"
    })
  }

  erreur(){
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
    });
    Toast.fire({
      icon: "error",
      title: "Erreur lors de l\'envoi de l\'email."
    })
  }

  
}


