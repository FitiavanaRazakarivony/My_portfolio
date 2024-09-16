import { Component,OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})

export class AccueilComponent implements OnInit  {
  ngOnInit(): void {
    AOS.init({disable:'mobile'});
    AOS.refresh();    
  }

}