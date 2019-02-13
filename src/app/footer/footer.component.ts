import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  nomi:Nomi = new Nomi;
  

  descrizione = 'DESCRIZIONE';
  linkUtili = 'LINK UTILI';
  social = 'SOCIAL';
  constructor() { }

  ngOnInit() {
  }

}
export class Nomi{
  rocchio = 'Rocchio Pietro';
  alberti = 'Alberti Davide';
  cerbaro = 'Cerbaro Jessica';
  baroni = 'Baroni Michelangelo';
  battisoni = 'Battistoni Pietro';
  tomasini = 'Tomasini Valeria';
  folgarait = 'Folgarait Cecilia';
}
