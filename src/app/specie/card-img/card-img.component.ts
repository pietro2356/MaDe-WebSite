import { Component, OnInit, Input } from '@angular/core';
import { Specie } from '../specie.model';

@Component({
  selector: 'app-card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.css']
})
export class CardImgComponent implements OnInit {

  @Input() specie: Specie;
  
  constructor() { }

  ngOnInit() {
  }  

}
