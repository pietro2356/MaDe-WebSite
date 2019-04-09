import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { DbService } from 'src/app/common/db.service';
import { SpecieService } from '../specie.service'
import { Famiglia } from '../model/famiglia.model';
import { Genere } from '../model/genere.model'


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})

export class SearchFormComponent implements OnInit {

  famiglie: Famiglia[];
  famiglieAvailableControl: Subscription;
  generi: Genere[];
  generiAvalaibleControl: Subscription;

  searchForm: FormGroup;

  constructor(private dbService: DbService,
              private specieService: SpecieService) { }

  ngOnInit() {
    this.dbService.getFamiglie();
    this.famiglieAvailableControl = this.specieService.famiglieAvailable
    .subscribe(
      (famiglie: Famiglia[]) => {
        this.famiglie = famiglie;
      }
    );
    this.searchForm = new FormGroup(
      {
        'famiglie': new FormControl(null)
      }
    );

    this.dbService.getGeneri();
    this.generiAvalaibleControl = this.specieService.generiAvailable
    .subscribe(
      (generi: Genere[]) => {
        this.generi = generi;
      }
    );
    this.searchForm = new FormGroup(
      {
        'famiglie': new FormControl(null),
        'generi': new FormControl(null)
      }
    );

  }

  ngOnDestroy() {
    this.famiglieAvailableControl = null;
    this.generiAvalaibleControl = null;
  }

  filtraPerFamiglia() {
    let famiglia: string = this.searchForm.get('famiglie').value;
    this.dbService.getSpecieByFamiglia(famiglia);    
    this.specieService.filtraGeneri(famiglia);
  }

  filtraPerGenere() {
    this.dbService.getSpecieByGenere(this.searchForm.get('generi').value);    
  }


}
