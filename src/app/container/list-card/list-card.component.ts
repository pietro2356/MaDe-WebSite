import { Component, OnInit } from '@angular/core';
import { Specie } from './card/specie.model';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  specie: Specie;

  constructor() { }

  ngOnInit() {
   
  }

}
