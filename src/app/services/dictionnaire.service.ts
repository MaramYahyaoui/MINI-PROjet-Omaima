import { Injectable } from '@angular/core';
import { Dictionnaire } from '../model/dictionnaire.model';
import { Type } from '../model/type.model'; 
@Injectable({
  providedIn: 'root'
})
export class DictionnaireService {
  dictionnaires : Dictionnaire[];
  dictionnaire : Dictionnaire;
  types :Type[];
  type = new Type();
  dictionnairesRecherche : Dictionnaire[];
  constructor() { 
    this.types = [ {idCat : 1, nomCat : "romen"},{idCat : 2, nomCat : "dictionnaire"}];
    this.dictionnaires = [
      {idDictionnaire : 1, nomDictionnaire : "larousse", prixDictionnaire : 100, dateCreation : new Date("01/14/2011"), type :{idCat : 2, nomCat : "dictionnaire"}},
      {idDictionnaire : 2, nomDictionnaire : "le petit robert", prixDictionnaire : 450, dateCreation : new Date("12/17/2010"),type :{idCat : 2, nomCat : "dictionnaire"}},
      {idDictionnaire : 3, nomDictionnaire :"crisco", prixDictionnaire :300, dateCreation : new Date("02/20/2020"),type :{idCat : 1, nomCat : "romen"}} ];
  }
  listeDictionnaire():Dictionnaire[] 
{
    return this.dictionnaires;
}
ajouterDictionnaire( newDictionnaire: Dictionnaire)
  {
  this.dictionnaires.push(newDictionnaire);
  }
  supprimerDictionnaire( d: Dictionnaire)
  {
    //supprimer le produit prod du tableau produits
    const index = this.dictionnaires.indexOf(d,0);
    if (index > -1)
    {
    this.dictionnaires.splice(index, 1);
    }
    /*this.dictionnaires.forEach((cur, index) => {
      if(d.idDictionnaire === cur.idDictionnaire) {
      this.dictionnaires.splice(index,1);
      }
      });*/
    
}

consulterDictionnaire(id:number): Dictionnaire{
  this.dictionnaire = this.dictionnaires.find(p => p.idDictionnaire == id);
  return this.dictionnaire;
  }

  trierDictionnaires(){
    this.dictionnaires = this.dictionnaires.sort((n1,n2) => {
    if (n1.idDictionnaire> n2.idDictionnaire) {
    return 1;
    }
    if (n1.idDictionnaire < n2.idDictionnaire) {
    return -1;
    }
    return 0;
    });
    }


updateDictionnaire(p:Dictionnaire)
{
// console.log(p);
this.supprimerDictionnaire(p);
this.ajouterDictionnaire(p);
}
listeTypes():Type[] 
 {
  return this.types;
  }
consulterType(id:number): Type
{
    this.type = this.types.find(cat => cat.idCat == id);
    return this.type;
}
rechercherParCategorie(idCat: number): Dictionnaire[]{
  this.dictionnairesRecherche = [];
  this.dictionnaires.forEach((cur, index) => 
  {if(idCat == cur.type.idCat) {
  console.log("cur "+cur);
  this.dictionnairesRecherche.push(cur);
  }
});
return this.dictionnairesRecherche; }
}
