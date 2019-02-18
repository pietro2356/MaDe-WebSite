import { Component, OnInit } from '@angular/core';
import { Specie } from './specie.model';
import { SpecieService } from './specie.service';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.css']
})
export class SpecieComponent implements OnInit {

  specie: Specie[];

  constructor(private specieService: SpecieService) { }

  ngOnInit() {
    this.specie = this.specieService.getSpecie();
  }

}
