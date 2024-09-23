import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  isLoading: boolean = false;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading$.subscribe(loading => {
      this.isLoading = loading;
      console.log('Loader state:', this.isLoading);    });
  }
}
