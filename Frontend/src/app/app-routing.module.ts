import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
// import { AjoutExpComponent} from './admin/component/ajout/experience/ajoutExp.component';
import { AccueilComponent } from './component/accueil/accueil.component'
import { ProfilComponent } from './component/profil/profil.component';
import { LoadingGuard } from './loading.guard';

const routes: Routes = [
  { path: 'experience', loadChildren: () => import('./component/experience/Experience.module').then(m => m.ExperienceModule)},
  { path: 'contact', loadChildren: () => import('./component/contact/contact.module').then(m => m.ContactModule) },
  { path: 'profil', loadChildren: () => import('./component/profil/profil.module').then(m => m.ProfilModule)  },
  // { path: '', component: AccueilComponent, canActivate: [LoadingGuard]  },
  { path: '', component: AccueilComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '/accueil' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
