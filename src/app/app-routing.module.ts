import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DictionnaireComponent } from './dictionnaire/dictionnaire.component';
import { AddDictionnaireComponent } from './add-dictionnaire/add-dictionnaire.component';
import { UpdateDictionnaireComponent } from './update-dictionnaire/update-dictionnaire.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProduitGuard } from './produit.guard';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';

const routes: Routes = [
  {path: "dictionnaire", component : DictionnaireComponent},
  {path: "add-dictionnaire", component : AddDictionnaireComponent, canActivate:[ProduitGuard]},
  { path: "", redirectTo: "dictionnaire", pathMatch: "full" },
  {path: 'login', component: LoginComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: "rechercheParCategorie", component : RechercheParCategorieComponent},
  {path: "updateDictionnaire/:id", component: UpdateDictionnaireComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
