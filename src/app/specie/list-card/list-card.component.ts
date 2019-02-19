import { Component, OnInit, Input } from '@angular/core';
import { Specie } from '../specie.model';
import { Subscription } from 'rxjs';
import { SpecieService } from '../specie.service';
import { DbService } from 'src/app/common/db.service';



@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  specie: Specie[];
  specieSuscription: Subscription;

  constructor(private specieService: SpecieService,
              private dbService: DbService) { }

  ngOnInit() {
    this.dbService.getSpecie();
    this.specieSuscription = this.specieService.specieChanged
    .subscribe(
      (specie: Specie[]) => {
        this.specie = specie; 
      });
  }
}
