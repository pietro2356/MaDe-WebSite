import { Component, OnInit, Input } from '@angular/core';
import { Specie } from '../specie.model';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.css']
})
export class CardDataComponent implements OnInit {

  @Input() specie: Specie;

  constructor() { }

  ngOnInit() {

  }

}
