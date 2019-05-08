import { Component, OnInit, Input } from '@angular/core';
import { Specie } from '../model/specie.model';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css']
})
export class DataCardComponent implements OnInit {

  @Input() specie: Specie

  constructor() { }

  ngOnInit() {
  }

}
