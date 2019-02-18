import { Component, OnInit, Input } from '@angular/core';
import { Specie } from '../../specie.model';


const imagePath: string = "http://daas.marconirovereto.it/baldo/";
const imageMap: string = "maps/";
const imageMapIcon: string = "maps_ico/";
const imagePhoto: string = "photo/";
const imagePhotoIco: string = "photo_ico/"

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

  public getImagePhotoUrl() {
    return imagePath + imagePhoto + this.specie.image_foto;
  }
  public getImagePhotoIconUrl() {
    return imagePath + imagePhotoIco + this.specie.image_foto;
  }
  public getImageMapUrl() {
    return imagePath + imageMap + this.specie.image_map;
  }
  public getImageMapIconUrl() {
    return imagePath + imageMapIcon + this.specie.image_map;
  }
}
