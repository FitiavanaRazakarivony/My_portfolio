import { Component,OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-imagenom',
  templateUrl: './imagenom.component.html',
  styleUrls: ['./imagenom.component.css'],  
  standalone:true
})

export class ImageNomComponent  implements OnInit{

  ngOnInit(): void {
    AOS.init({disable:'mobile'});
    AOS.refresh();
  }
}
