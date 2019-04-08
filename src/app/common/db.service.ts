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

  constructor(private http: HttpClient, private specieService: SpecieService) { }

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

<<<<<<< HEAD
  getSpecieByFamiglia(famiglia: string) {    
    let url = servicePath + 'specie/famiglia/'+famiglia;
=======
  public getSpecie() {
    let url = restServiceUrl + "specie";
>>>>>>> 48de26e0456834afff9317ad41dd93a28a109c01
    this.http.get<Specie[]>(url, {
      observe: 'body',
      responseType: 'json'
    })
<<<<<<< HEAD
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
=======
      .subscribe(
        (specie: Specie[]) => {
          console.log(specie);
          this.specieService.setSpecie(specie.map(dati => new Specie(dati)));
        }
      );
  }

  public getGenere(genere: string) {
    let url = restServiceUrl + "Specie/Genere/" + genere;
>>>>>>> 48de26e0456834afff9317ad41dd93a28a109c01
    this.http.get<Specie[]>(url, {
      observe: 'body',
      responseType: 'json'
    })
<<<<<<< HEAD
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
=======
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
>>>>>>> 48de26e0456834afff9317ad41dd93a28a109c01
  }
}
