import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Specie } from '../model/specie.model';
import { SpecieService } from '../specie.service';
import { DbService } from 'src/app/common/db.service';

@Component({
  selector: 'app-specie-list',
  templateUrl: './specie-list.component.html',
  styleUrls: ['./specie-list.component.css']
})
export class SpecieListComponent implements OnInit {

  @Input() specie: Specie[];
  @Input() corrente: number;

  @Output() onChangeSpecieIndex = new EventEmitter<number>();

  constructor(private specieService: SpecieService,
              private dbService: DbService) { }

  ngOnInit() {
    console.log('list', this.specie)
  }

  selezionaSpecie(indice: number) {
    this.onChangeSpecieIndex.emit(indice);
  }
}
