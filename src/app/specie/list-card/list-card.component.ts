import { Component, OnInit, Input } from '@angular/core';
import { Specie } from '../specie.model';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  @Input() specie: Specie[];

  constructor() { }

  ngOnInit() {
   
  }

}
