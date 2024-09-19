import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone:true,
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule
    
  ],
})
export class NavbarComponent {
  navbarStyles: { [key: string]: string } = {};
  activeTab: string = 'home';


  faHome = faHome;
  faUser = faUser;
  faBriefcase = faBriefcase;
  faEnvelope = faEnvelope;
  faCode = faCode;

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollOffset > 0) {
      // this.navbarStyles['padding'] = '40px 10px';
      this.navbarStyles['background-color'] = '#f1f1f1';
    } else {
      // this.navbarStyles['padding'] = '40px 10px';
      this.navbarStyles['background-color'] = 'transparent';
      this.navbarStyles['color'] = 'rgb(240, 240, 232)';
    }
  }

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }
}