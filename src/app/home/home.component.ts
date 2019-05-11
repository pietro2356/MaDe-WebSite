import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DbService } from '../common/db.service';
import { SpecieService } from '../specie/specie.service';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  searchForm: FormGroup
  constructor(private dbService: DbService,
              private specieService: SpecieService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.dbService.getSpecie();
    this.searchForm = new FormGroup(
      {
        'ricerca': new FormControl()
      }
    )
  }

  cerca() {
    let stringaRicerca: string = this.searchForm.get('ricerca').value;
    console.log(stringaRicerca);
    if (stringaRicerca !== null) {
      this.specieService.filtraTutto(stringaRicerca);
      if(this.specieService.specieDaVisualizzare.length > 0) {
          this.router.navigateByUrl("/specie");
      }
      else
      {
        this.dialog.open(DialogData, {
          data: "Messaggio di errore!!",
        })
        this.searchForm.reset("");
      }
    } 
    else {
      //this.specieService.filtraSpecie();
      this.specieService.filtraTutto();
    }
  }

  cercaFamiglia(){
    this.dialog.open(DialogData, {
      data: "Cerca Famiglia!",
    })
  }
  cercaGenere(){
    this.dialog.open(DialogData, {
      data: "Cerca Genere!",
    })
  }
  cercaAltitudine(){
    this.dialog.open(DialogData, {
      data: "Cerca Altitudine!",
    })
  }
}

@Component({
  selector: 'dialog-data',
  templateUrl: '../common/alert/dialog-data.html',
  styleUrls: ['../common/alert/dialog-data.css']
})
export class DialogData {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
}