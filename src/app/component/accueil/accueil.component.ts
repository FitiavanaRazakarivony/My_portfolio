import { Component,OnInit } from '@angular/core';
import AOS from 'aos';
import { faUser  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],  
  standalone: true,
  imports: [
    NavbarComponent,
    FontAwesomeModule,
    CommonModule
  ],
})

export class AccueilComponent implements OnInit  {
  faUser = faUser;

  ngOnInit(): void {
    AOS.init({disable:'mobile'});
    AOS.refresh();    
  }

}
