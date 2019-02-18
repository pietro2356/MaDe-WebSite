import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpecieService } from '../specie/specie.service';
import { Specie } from '../specie/specie.model';

const restServiceUrl: string = "http://daas.marconirovereto.it:50055/";

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient,
              private specieService: SpecieService) { }


  public getSpecie() {

    let url = restServiceUrl + "specie";

    this.http.get<Specie[]>(url, {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe(
        (specie: Specie[]) => {          
          this.specieService.setSpecie(specie);
        }
      );
  }
}

