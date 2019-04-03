import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpecieService } from '../specie/specie.service';
import { Specie } from '../specie/model/specie.model';
import { Famiglia } from '../specie/model/famiglia.model';
import { Genere } from '../specie/model/genere.model';

const servicePath: string = "http://daas.marconirovereto.it:50055/";

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient,
              private specieService: SpecieService) { }

  getSpecie() {    
    let url = servicePath + 'specie';
    this.http.get<Specie[]>(url, {
      observe: 'body',
      responseType: 'json'
    })
    .subscribe(
      (specie: Specie[]) => {
        specie = specie.map(item => new Specie(item));
        console.log(specie);
        this.specieService.setSpecie(specie);
      }
    );
  }

  getSpecieByFamiglia(famiglia: string) {    
    let url = servicePath + 'specie/famiglia/'+famiglia;
    this.http.get<Specie[]>(url, {
      observe: 'body',
      responseType: 'json'
    })
    .subscribe(
      (specie: Specie[]) => {
        specie = specie.map(item => new Specie(item));
        //console.log(specie);
        this.specieService.setSpecie(specie);
      }
    );
  }

  getSpecieByGenere(genere: string) {    
    let url = servicePath + 'specie/genere/'+genere;
    this.http.get<Specie[]>(url, {
      observe: 'body',
      responseType: 'json'
    })
    .subscribe(
      (specie: Specie[]) => {
        specie = specie.map(item => new Specie(item));
        //console.log(specie);
        this.specieService.setSpecie(specie);
      }
    );
  }

  getFamiglie() {    
    let url = servicePath + 'Famiglie';
    this.http.get<Famiglia[]>(url, {
      observe: 'body',
      responseType: 'json'
    })
    .subscribe(
      (famiglie: Famiglia[]) => {
        famiglie = famiglie.map(item => new Famiglia(item));
        //console.log(famiglie);
        this.specieService.setFamiglie(famiglie);
      }
    );
  }

  getGeneri() {    
    let url = servicePath + 'Generi';
    this.http.get<Genere[]>(url, {
      observe: 'body',
      responseType: 'json'
    })
    .subscribe(
      (generi: Genere[]) => {
        generi = generi.map(item => new Genere(item));
        //console.log(famiglie);
        this.specieService.setGeneri(generi);
      }
    );
  }
}
