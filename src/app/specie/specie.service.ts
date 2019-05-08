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
  famiglie: Famiglia[];
  generi: Genere[];

  specieAvailable = new Subject<Specie[]>();
  famiglieAvailable = new Subject<Famiglia[]>();
  generiAvailable = new Subject<Genere[]>();

  specieChanged = new Subject<Specie[]>();

  constructor() { }

  getSpecie(): Specie[] {
    return this.specie.slice();
  }

  getSpecieItem(index: number): Specie {
    return this.specie.slice(index, index+1)[0];
  }

  getGeneri(): Genere[] {
    return this.generi.slice();
  }

  setSpecie(specie: Specie[]) {
    this.specie = specie.slice();
    this.specieAvailable.next(this.specie);
  }

  setFamiglie(famiglie: Famiglia[]) {
    this.famiglie = famiglie;
    this.famiglieAvailable.next(this.famiglie);
  }

  setGeneri(generi: Genere[]) {
    this.generi = generi;
    this.generiAvailable.next(this.generi);
  }

  filtraGeneri(famiglia: string) {    
    this.generiAvailable.next(this.generi.filter(item => {
      return item.famiglia == famiglia;
    }));
  }

  filtraSpecie(inizialeFamiglia: string) {
    let specieFiltrate = this.specie.filter(item => item.famiglia.toLowerCase().startsWith(inizialeFamiglia.toLowerCase()));
    console.log('specie filtrate', specieFiltrate);
    this.specieChanged.next(specieFiltrate);
  }
}
