import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
// import { AjoutExpComponent} from './admin/component/ajout/experience/ajoutExp.component';
import { AccueilComponent } from './component/accueil/accueil.component'
import { ProfilComponent } from './component/profil/profil.component';

const routes: Routes = [
  { path: 'experience', loadChildren: () => import('./component/experience/Experience.module').then(m => m.ExperienceModule)},
  { path: 'contact', component: ContactComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: '**', redirectTo: '/accueil' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
