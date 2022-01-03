import { Component, OnInit } from '@angular/core';
import { Dictionnaire } from '../model/dictionnaire.model';
import { AuthService } from '../services/auth.service';
import {DictionnaireService } from '../services/dictionnaire.service';
@Component({
  selector: 'app-dictionnaire',
  templateUrl: './dictionnaire.component.html',
  styleUrls: ['./dictionnaire.component.css']
})
export class DictionnaireComponent implements OnInit {
  dictionnaires : Dictionnaire[];
  constructor(private DictionnaireService: DictionnaireService ,public authService: AuthService) { 
    this.dictionnaires = DictionnaireService.listeDictionnaire();
  }

  ngOnInit(): void {
  }
  supprimerDictionnaire(d: Dictionnaire)
{
//console.log(p);
let conf = confirm("Etes-vous sûr ?");
 if (conf)
this.DictionnaireService.supprimerDictionnaire(d);
}


}
