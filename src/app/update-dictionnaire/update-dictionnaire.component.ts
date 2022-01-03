import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { DictionnaireService } from '../services/dictionnaire.service';
import { Dictionnaire } from '../model/dictionnaire.model';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-update-dictionnaire',
  templateUrl: './update-dictionnaire.component.html',
  styles: [
  ]
})
export class UpdateDictionnaireComponent implements OnInit {
  currentDictionnaire = new Dictionnaire();
  types : Type[];
  updatedType : Type;
  constructor(private activatedRoute: ActivatedRoute, private router :Router,private dictionnaireService: DictionnaireService) { }

  ngOnInit(): void {
    this.types = this.dictionnaireService.listeTypes();
    this.currentDictionnaire = this.dictionnaireService.consulterDictionnaire(this.activatedRoute.snapshot.params.id);
console.log(this.currentDictionnaire);

  }
  updateDictionnaire()
  { 
  this.updatedType =this.dictionnaireService.consulterType(this.currentDictionnaire.type.idCat);
  this.currentDictionnaire.type = this.updatedType;
  this.dictionnaireService.updateDictionnaire(this.currentDictionnaire);
  this.router.navigate(['dictionnaire']);
  }
  
}
