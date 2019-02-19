import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpecieService } from '../specie/specie.service';
import { Specie } from '../specie/specie.model';

const restServiceUrl: string = "http://daas.marconirovereto.it:50055/";

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient, private specieService: SpecieService) { }


  public getSpecie() {
    let url = restServiceUrl + "specie";
    this.http.get<Specie[]>(url, {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe(
        (specie: Specie[]) => {
          console.log(specie);
          this.specieService.setSpecie(specie.map(dati => new Specie(dati)));
        }
      );
  }
  public getGenere(genere: string) {
    let url = restServiceUrl + "Specie/Genere/" + genere;
    this.http.get<Specie[]>(url, {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe(
        (specie: Specie[]) => {
          console.log(specie);
          this.specieService.setSpecie(specie.map(dati => new Specie(dati)));
        }
      );
  }

  public getFamiglia(famiglia: string) {
    let url = restServiceUrl + "/Specie/famiglia/" + famiglia;
    this.http.get<Specie[]>(url, {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe(
        (specie: Specie[]) => {
          console.log(specie);
          this.specieService.setSpecie(specie.map(dati => new Specie(dati)));
        }
      );
  }


  public getSpecieByDesc(specieByDesc: string) {
    let url = restServiceUrl + "/Descrizione/" + specieByDesc;
    this.http.get<Specie[]>(url, {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe(
        (specie: Specie[]) => {
          console.log(specie);
          this.specieService.setSpecie(specie.map(dati => new Specie(dati)));
        }
      );
  }

  public getSpecieByQuotaMax(quotaMax: string) {
    let url = restServiceUrl + "/Quote/sopra/" + quotaMax;
    this.http.get<Specie[]>(url, {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe(
        (specie: Specie[]) => {
          console.log(specie);
          this.specieService.setSpecie(specie.map(dati => new Specie(dati)));
        }
      );
  }

  public getSpecieByQuotaMin(quotaMin: string) {
    let url = restServiceUrl + "/Quote/sotto/" + quotaMin;
    this.http.get<Specie[]>(url, {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe(
        (specie: Specie[]) => {
          console.log(specie);
          this.specieService.setSpecie(specie.map(dati => new Specie(dati)));
        }
      );
  }

  public getSpecieByQuotaMinMax(quotaMin: string, quaotaMax: string) {
    let url = restServiceUrl + "/Quote/" + quotaMin + "/" + quaotaMax;
    this.http.get<Specie[]>(url, {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe(
        (specie: Specie[]) => {
          console.log(specie);
          this.specieService.setSpecie(specie.map(dati => new Specie(dati)));
        }
      );
  }


  public getNomeComune(nomeComune: string) {
    let url = restServiceUrl + "/Nome_Comune/" + nomeComune;
    this.http.get<Specie[]>(url, {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe(
        (specie: Specie[]) => {
          console.log(specie);
          this.specieService.setSpecie(specie.map(dati => new Specie(dati)));
        }
      );
  }

  public getNomeComuneBegin(nomeComuneBegin: string) {
    let url = restServiceUrl + "/Nome_Comune/begin/" + nomeComuneBegin;
    this.http.get<Specie[]>(url, {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe(
        (specie: Specie[]) => {
          console.log(specie);
          this.specieService.setSpecie(specie.map(dati => new Specie(dati)));
        }
      );
  }

  public getNomeLatino(nomeLatino: string) {
    let url = restServiceUrl + "/Nome_Latino/" + nomeLatino;
    this.http.get<Specie[]>(url, {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe(
        (specie: Specie[]) => {
          console.log(specie);
          this.specieService.setSpecie(specie.map(dati => new Specie(dati)));
        }
      );
  }
}
