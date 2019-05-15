import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  nomi:Nomi = new Nomi;
  descrizione = "Sito realizzato per il progetto MaDe, collaborazione fra gli studenti dell'indirizzo informatico dell'istituto Marconi e gli alunni del liceo artistico Depero. Gestisce la navigazione nel database del Museo Civico di Rovereto, che comprende più di 2500 piante differenti distribuite sul territorio del Monte Baldo. I metodi di ricerca, richiesti dal Museo, permettono di selezionare le piante in base alla famiglia, al genere, alla quota minima e massima, ai nomi comuni o latini e dal contenuto della descrizione delle piante.";
  linkUtili = 'LINK UTILI';
  social = 'SOCIAL';
  copy = '&copy;';
  constructor() { }

  ngOnInit() {
  }

}
export class Nomi{
  rocchio = 'Rocchio Pietro';
  alberti = 'Alberti Davide';
  cerbaro = 'Cerbaro Jessica';
  baroni = 'Baroni Michelangelo';
  tomasini = 'Tomasini Valeria';
  folgarait = 'Folgarait Cecilia';
}

// Fonte dei dati: Edizione Osiride del 2009 de "Flora illustrata del Monte Baldo", scritta e curata da Filippo Prosser, Alessio Bertolli e Francesco Festi.
