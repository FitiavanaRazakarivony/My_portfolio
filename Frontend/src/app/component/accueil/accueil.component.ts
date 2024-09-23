import { Component,OnInit } from '@angular/core';
import AOS from 'aos';
import { faUser  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})

export class AccueilComponent implements OnInit  {
  
  faUser = faUser;

  ngOnInit(): void {
    AOS.init({disable:'mobile'});
    AOS.refresh();    
  }

}
