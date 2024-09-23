import { Component, OnInit } from '@angular/core';
import { LoaderService } from './component/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent implements OnInit {
  isLoading: boolean = true;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.isLoading$.subscribe(loading => {
      this.isLoading = loading;
    });

    this.loaderService.showLoader();
    setTimeout(() => {
      this.loaderService.hideLoader();
    }, 2000); // Remplace cela par une logique de chargement réelle
  }
}
