import { Component, OnInit, Input } from '@angular/core';
import { Specie } from '../../specie.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() specie: Specie;

  constructor() { }

  ngOnInit() {
  }
}
