import { Dictionnaire } from './../model/dictionnaire.model';
import { Component, OnInit } from '@angular/core';
import { DictionnaireService } from '../services/dictionnaire.service';
import { AuthService } from '../services/auth.service';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
  dictionnaires : Dictionnaire [];
  types : Type [];
  IdCategorie: number;
  constructor(private dictionnaireService: DictionnaireService,public authService: AuthService) { }

  ngOnInit(): void {
    this.types=this.dictionnaireService.listeTypes();
    this.dictionnaires=[];
  }
  onChange() {
    console.log(this.IdCategorie);
    this.dictionnaires = this.dictionnaireService.rechercherParCategorie(this.IdCategorie);
    }
    supprimerDictionnaire(d: Dictionnaire)
    {
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
     if (conf)
     {
    this.dictionnaireService.supprimerDictionnaire(d);
    this.dictionnaires = this.dictionnaireService.rechercherParCategorie(this.IdCategorie);
     }
    }
}
