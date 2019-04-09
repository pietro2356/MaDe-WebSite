import { Component, OnInit, OnDestroy } from '@angular/core';
import { DbService } from '../common/db.service';
import { Specie } from './model/specie.model';
import { SpecieService } from './specie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.css']
})
export class SpecieComponent implements OnInit, OnDestroy {

  specie: Specie[];
  specieAvailableControl: Subscription;


  constructor(private dbService: DbService,
              private specieService: SpecieService) { }

  ngOnInit() {
    //this.dbService.getSpecie();
    
    this.specieAvailableControl = this.specieService.specieAvailable
      .subscribe(
        (specie: Specie[]) => {
          this.specie = specie;
        }
      )
  }

  ngOnDestroy() {
    this.specieAvailableControl = null;
  }

}
