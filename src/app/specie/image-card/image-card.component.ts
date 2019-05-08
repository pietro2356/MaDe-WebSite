import { Component, OnInit, Input } from '@angular/core';
import { Specie } from '../model/specie.model';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {

  @Input() specie: Specie;

  constructor() { }

  ngOnInit() {
  }

}
