import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DbService } from '../common/db.service';
import { SpecieService } from '../specie/specie.service';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private dbService: DbService,
              private specieService: SpecieService,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.dbService.getSpecie();
    this.searchForm = new FormGroup(
      {
        'ricerca': new FormControl(),
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
          data: {
            message: "Fiore o Pianta non trovata!!",
            type: null
          }
        })
        this.searchForm.reset("");
      }
    } 
    else {
      //this.specieService.filtraSpecie();
      this.specieService.filtraTutto();
    }
  }

  cercaImage() {
    this.specieService.filtraSpecie();
    this.router.navigateByUrl("/specie");
  }

  searchImage() {
    this.dialog.open(DialogData, {
      data: {
        message: "Work in progress ...",
        type: "cercaImage"
      }
    })
  }

  cercaFamiglia() {
    this.dialog.open(DialogData, {
      data: {
        message: "Cerca per Famiglia",
        type: "famiglia"
      }
    })
  }

  cercaGenere() {
    this.dialog.open(DialogData, {
      data: {
        message: "Cerca per Genere",
        type: "genere"
      }
    })
  }

  cercaAltitudine() {
    this.dialog.open(DialogData, {
      data: {
        message: "Cerca per Altitudine",
        type: "altitudine"
      }
    })
  }

  cercaButtonImage() {
    this.dialog.open(DialogData, {
      data: {
        message: "Ricerca tramite foto",
        type: "carcaImage"
      }
    })
  }
}

@Component({
  selector: 'dialog-data',
  templateUrl: '../common/alert/dialog-data.html',
  styleUrls: ['../common/alert/dialog-data.css']
})
export class DialogData {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, 
                                       private specieService: SpecieService, 
                                       private router: Router, 
                                       private dialog: MatDialog) {}

  searchForm: FormGroup;

  ngOnInit() {
    this.searchForm = new FormGroup(
      {
        'ricerca': new FormControl(),
        'ricerca2': new FormControl()
      }
    )
  }

  cercaFamiglia() {
    let stringaRicerca: string = this.searchForm.get('ricerca').value;
    console.log(stringaRicerca);
    if (stringaRicerca !== null) {
      this.specieService.filtraFamiglia(stringaRicerca)
      if(this.specieService.specieDaVisualizzare.length > 0) {
          this.dialog.closeAll();
          this.router.navigateByUrl("/specie");
      }
      else
      {
        this.dialog.open(DialogData, {
          data: {
            message: "Nessun fiore o pianta trovato con la Famiglia specificata",
            type: null
          }
        })
        this.searchForm.reset("");
      }
    }
  }

  cercaGenere() {
    let stringaRicerca: string = this.searchForm.get('ricerca').value;
    console.log(stringaRicerca);
    if (stringaRicerca !== null) {
      this.specieService.filtraGenere(stringaRicerca)
      if(this.specieService.specieDaVisualizzare.length > 0) {
          this.dialog.closeAll();
          this.router.navigateByUrl("/specie");
      }
      else
      {
        this.dialog.open(DialogData, {
          data: {
            message: "Nessun fiore o pianta trovato con il Genere specificato",
            type: null
          }
        })
        this.searchForm.reset("");
      }
    }
  }

  cercaAltitudine() {
    let quotaMin: string = this.searchForm.get('ricerca').value;
    let quotaMax: string = this.searchForm.get('ricerca2').value;
    console.log('q min',quotaMin);
    console.log('q max', quotaMax);
    if (quotaMin != null && quotaMax != null) {
      this.specieService.filtraAltitudine(Number.parseInt(quotaMin), Number.parseInt(quotaMax));
      if(this.specieService.specieDaVisualizzare.length > 0) {
          this.dialog.closeAll();
          this.router.navigateByUrl("/specie");
      }
      else
      {
        this.dialog.open(DialogData, {
          data: {
            message: "Nessun fiore o pianta trovato con le quote specificate",
            type: null
          }
        })
        this.searchForm.reset("");
      }
    }
  }
}