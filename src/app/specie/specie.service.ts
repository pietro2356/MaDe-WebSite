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
  specieDaVisualizzare: Specie[];
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
    if (param) {
      let datiFiltrati = this.specie.filter(item => { 
      item.nome_comune.toLowerCase().startsWith(param.toLowerCase()),
      item.nome_latino.toLowerCase().startsWith(param.toLowerCase()),
      item.id.toString().startsWith(param.toLowerCase()),
      item.quota_max.toString().startsWith(param.toLowerCase()),
      item.quota_min.toString().startsWith(param.toLowerCase()),
      item.riferimento.toLowerCase().toString().startsWith(param.toLowerCase()),
      item.sinonimi.toLowerCase().startsWith(param.toLowerCase()),
      item.descrizione.toLowerCase().startsWith(param.toLowerCase()),
      item.subsp.toLowerCase().startsWith(param.toLowerCase())
      });
      let x = this.specie.filter(item => item.nome_comune.toLowerCase().startsWith(param.toLowerCase()))

      let nomeF = this.specie.filter(item => item.nome_comune.toLowerCase().includes(param.toLowerCase()));
      let nomeL = this.specie.filter(item => item.nome_latino.toLowerCase().startsWith(param.toLowerCase()));
      let id = this.specie.filter(item => item.id.toString().toLowerCase().startsWith(param.toLowerCase()));
      let qMin = this.specie.filter(item => item.quota_min.toString().startsWith(param.toLowerCase()));
      let qMax = this.specie.filter(item => item.quota_max.toString().startsWith(param.toLowerCase()));
      let rife = this.specie.filter(item => item.riferimento.toLowerCase().startsWith(param.toLowerCase()));
      let sin = this.specie.filter(item => item.sinonimi.toLowerCase().startsWith(param.toLowerCase()));
      let desc = this.specie.filter(item => item.descrizione.toLowerCase().includes(param.toLowerCase()));
      let sup = this.specie.filter(item => item.subsp.toLowerCase().startsWith(param.toLowerCase()));

      //this.specieTemporane = this.specieTemporane.concat(nomeF, nomeL, id, qMin, qMax, rife, sin, desc, sup);
      ///TODO: DA FIXARE 
      datiFiltrati.forEach(element => {
        console.log("fil");
        console.log("fil" + element);
      });
      this.specieDaVisualizzare = desc;
    }else{
      this.specieDaVisualizzare = this.specie;
    }
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