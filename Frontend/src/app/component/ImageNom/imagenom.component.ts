import { Component,OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-imagenom',
  templateUrl: './imagenom.component.html',
  styleUrl: './imagenom.component.css',
})

export class ImageNomComponent  implements OnInit{

  ngOnInit(): void {
    AOS.init({disable:'mobile'});
    AOS.refresh();
  }

  openEmail(): void {
    window.open('mailto:razakarivonyfinoanafeno@example.com', '_blank');
  }
  openLinkedin():void{
    window.open('https://www.linkedin.com/in/finoana-feno-fitiavana-razakarivony-45b513263/', '_blank');
  }
  opengithub():void{
    window.open('https://github.com/FitiavanaRazakarivony', '_blank');
  }
}
