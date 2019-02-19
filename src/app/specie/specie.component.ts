import { Component, OnInit } from '@angular/core';
import { Specie } from './specie.model';
import { SpecieService } from './specie.service';
import { Subscription } from 'rxjs';
import { DbService } from '../common/db.service';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.css']
})
export class SpecieComponent implements OnInit {

  specie: Specie[];

  specieSubscription: Subscription;

  constructor(private specieService: SpecieService,
    private dbService: DbService) { }

  ngOnInit() {

    this.dbService.getSpecie();
    this.specieSubscription = this.specieService.specieChanged
      .subscribe(
        (specie: Specie[]) => {
          this.specie = specie;
        }
      );

  }

  getSpecie(index: number) {
    if (this.specie)
    return this.specie[index];
  }

}
