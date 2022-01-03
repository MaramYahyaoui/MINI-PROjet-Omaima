import { Component, OnInit } from '@angular/core';
import { Dictionnaire } from '../model/dictionnaire.model';
import {DictionnaireService } from '../services/dictionnaire.service';
import { Router } from '@angular/router';
import { Type } from '../model/type.model';
@Component({
  selector: 'app-add-dictionnaire',
  templateUrl: './add-dictionnaire.component.html',
  styleUrls: ['./add-dictionnaire.component.css']
})
export class AddDictionnaireComponent implements OnInit {
  newDictionnaire = new Dictionnaire();
  constructor(private DictionnaireService: DictionnaireService ,private router :Router,
    ) {  
  }
  msg :String;
  types : Type[];
  newIdCat : number;
  newType : Type;
  ngOnInit(): void {
    this.types = this.DictionnaireService.listeTypes();
  }
  addDictionnaire()
  {
    this.newType = this.DictionnaireService.consulterType(this.newIdCat);
    this.newDictionnaire.type = this.newType;
    this.DictionnaireService.ajouterDictionnaire(this.newDictionnaire);
    this.router.navigate(['/']);
    //this.msg = "Produit "+ this.newDictionnaire.nomDictionnaire+" ajouté avec succès"

  }
}
