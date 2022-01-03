import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionnaireComponent } from './dictionnaire/dictionnaire.component';
import { AddDictionnaireComponent } from './add-dictionnaire/add-dictionnaire.component';
import { FormsModule } from '@angular/forms';
import { UpdateDictionnaireComponent } from './update-dictionnaire/update-dictionnaire.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
@NgModule({
  declarations: [
    AppComponent,
    DictionnaireComponent,
    AddDictionnaireComponent,
    UpdateDictionnaireComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
