import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  card: Card;

  constructor() { }

  ngOnInit() {
    this.card = new Card("Cipolla", "http://daas.marconirovereto.it/Baldo/photo_ico/1%20Huperzia%20selago.jpg");
  }
}
