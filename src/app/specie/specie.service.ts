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
  specieDaVisualizzare: Specie[] = [];
  specieTemporane: Specie[];

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

  filtraTutto(param?: string){
    this.specieDaVisualizzare = [];
    if(param) {
      this.specie.forEach(element => {
        if(element.descrizione.toLowerCase().includes(param.toLowerCase()) ||
          element.epiteto.toLowerCase().startsWith(param.toLowerCase()) ||
          element.famiglia.toLowerCase().startsWith(param.toLowerCase()) ||
          element.genere.toLowerCase().startsWith(param.toLowerCase()) ||
          element.id.toString() === param ||
          element.nome_comune.toLowerCase().startsWith(param.toLowerCase()) ||
          element.nome_latino.toLowerCase().startsWith(param.toLowerCase()) ||
          element.quota_max.toString() === param ||
          element.quota_min.toString() === param ||
          element.riferimento.toLowerCase().includes(param.toLowerCase()) ||
          element.sinonimi.toLowerCase().includes(param.toLowerCase()) ||
          element.subsp.toLowerCase().startsWith(param.toLowerCase())) {
            this.specieDaVisualizzare.push(element);
          }
      });
    }
    else {
      this.specieDaVisualizzare = this.specie;
    }
  }

  filtraSpecie() {
    this.specieDaVisualizzare = this.specie;
  }

  /*Filtri bottoni laterali*/
  filtraFamiglia(param: string) {
      let specieFiltrate = this.specie.filter(item => item.famiglia.toLowerCase().startsWith(param.toLowerCase()));
      this.specieDaVisualizzare = specieFiltrate;
  }

  filtraGenere(param: string) {
      let specieFiltrate = this.specie.filter(item => item.genere.toLowerCase().startsWith(param.toLowerCase()));
      this.specieDaVisualizzare = specieFiltrate;
  }

  filtraAltitudine(q_min: number, q_max: number) {
    let specieFiltarateQMin = this.specie.filter(item => item.quota_min >= q_min)
    let specieFiltarate = specieFiltarateQMin.filter(item => item.quota_max <= q_max);
    this.specieDaVisualizzare = specieFiltarate;
  }
}