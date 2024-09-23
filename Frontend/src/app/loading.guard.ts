import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderService } from './component/loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingGuard implements CanActivate {

  constructor(private loaderService: LoaderService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> {
    
    this.loaderService.showLoader(); // Afficher le loader

    // Simuler un délai de chargement (remplace par ta logique réelle)
    setTimeout(() => {
      this.loaderService.hideLoader(); // Cacher le loader après le chargement
    }, 2000);

    return true; // Autoriser la navigation
  }
}

