import { Injectable } from '@angular/core';
import { Specie } from './model/specie.model';
import { Subject } from 'rxjs';
import { Famiglia } from './model/famiglia.model';
import { Genere } from './model/genere.model';

@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  specie: Specie[];
  specieDaVisualizzare: Specie[];0

  famiglie: Famiglia[];
  generi: Genere[];

  specieAvailable = new Subject<Specie[]>();
  famiglieAvailable = new Subject<Famiglia[]>();
  generiAvailable = new Subject<Genere[]>();

  constructor() { }

  getSpecie() {
    if(this.specieDaVisualizzare.length > 0) this.specieAvailable.next(this.specieDaVisualizzare);
    else {
      alert("Messaggio di errore");
    }
  }

  getSpecieItem(index: number): Specie {
    return this.specie.slice(index, index+1)[0];
  }

  getGeneri(): Genere[] {
    return this.generi.slice();
  }

  setSpecie(specie: Specie[]) {
    this.specie = specie;
    //this.specieAvailable.next(this.specie);
  }

  setFamiglie(famiglie: Famiglia[]) {
    this.famiglie = famiglie;
    this.famiglieAvailable.next(this.famiglie);
  }

  setGeneri(generi: Genere[]) {
    this.generi = generi;
    this.generiAvailable.next(this.generi);
  }

  filtraGeneri(genere: string) {    
    this.generiAvailable.next(this.generi.filter(item => {
      return item.genere == genere;
    }));
  }

  filtraSpecie(inizialeFamiglia?: string) {
    if (inizialeFamiglia) {
      let specieFiltrate = this.specie.filter(item => item.famiglia.toLowerCase().startsWith(inizialeFamiglia.toLowerCase()));
      this.specieDaVisualizzare = specieFiltrate;
    }
    else {
      this.specieDaVisualizzare = this.specie;
    }
  }
}
