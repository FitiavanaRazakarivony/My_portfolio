import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cursor-tracker',
  template: `<div class="cursor" [ngStyle]="{'transform': 'translate(' + (posX - 20) + 'px, ' + (posY - 20) + 'px)'}"></div>`,
  styleUrls: ['./cursor-tracker.component.css']
})
export class CursorTrackerComponent {
  posX = 0;
  posY = 0;

  // Écouteur pour détecter le mouvement de la souris
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.posX = event.clientX;
    this.posY = event.clientY;
  }
}
