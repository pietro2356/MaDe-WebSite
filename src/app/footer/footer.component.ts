import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  nomi:Nomi = new Nomi;
  descrizione = 'Qui andrà inerita una breve descrizione del sito! ---Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit vel ex fugiat obcaecati. Voluptas culpa, laudantium similique odit ut impedit sunt asperiores corrupti dolor aperiam. Porro consequuntur molestias eligendi fuga.---';
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
  battistoni = 'Battistoni Pietro';
  tomasini = 'Tomasini Valeria';
  folgarait = 'Folgarait Cecilia';
}