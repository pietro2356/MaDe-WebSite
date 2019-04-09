import { Component, OnInit, Input } from '@angular/core';
import { Specie } from '../model/specie.model';

@Component({
  selector: 'app-specie-list',
  templateUrl: './specie-list.component.html',
  styleUrls: ['./specie-list.component.css']
})
export class SpecieListComponent implements OnInit {

  @Input() specie: Specie[];

  constructor() { }

  ngOnInit() {
  }

}
