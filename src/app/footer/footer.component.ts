import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  descrizione = 'DESCRIZIONE';
  contatti = 'CONTATTI';
  linkUtili = 'LINK UTILI';
  social = 'SOCIAL';
  constructor() { }

  ngOnInit() {
  }

}
