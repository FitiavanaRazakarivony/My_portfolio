import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loadingSubject = new BehaviorSubject<boolean>(true);
  isLoading$ = this.loadingSubject.asObservable();

  showLoader() {
    console.log('Loader shown');
    this.loadingSubject.next(true);
  }

  hideLoader() {
    console.log('Loader hidden');
    this.loadingSubject.next(false);
  }
}
