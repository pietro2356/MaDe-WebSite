import { Component, OnInit, Input, NgModule } from '@angular/core';
import { DbService } from '../common/db.service';
import { Specie } from './model/specie.model';
import { SpecieService } from './specie.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.css'],
  animations: []
})
export class SpecieComponent implements OnInit {

  specie: Specie[];
  corrente: number;

  specieSubscription: Subscription;

  constructor(private dbService: DbService,
              private specieService: SpecieService,
              private router: Router,
              private location: Location) { }

  ngOnInit() {    
    this.corrente = -1;
    this.specieSubscription = this.specieService.specieAvailable
      .subscribe(
        (specie: Specie[]) => {
          console.log('filtro', specie)
          this.specie = specie;
          this.corrente = 0;
        }
      );
      this.specieService.getSpecie();
  }
  
  selezionaSpecie(indice: number) {
    this.corrente = indice;
  }

  gotoPage(){
    this.location.back();
  }
}
