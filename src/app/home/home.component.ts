import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DbService } from '../common/db.service';
import { SpecieService } from '../specie/specie.service';
import { Router } from '@angular/router';
import { AlertService } from '../common/alert/alertservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup
  constructor(private dbService: DbService,
              private specieServie: SpecieService,
              private router: Router,
              private alertService: AlertService) { }

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
    if (stringaRicerca) {
      this.specieServie.filtraSpecie(stringaRicerca);
      if(this.specieServie.specieDaVisualizzare.length > 0) {
          this.router.navigateByUrl("/specie");

      }
      else
      {
        this.alertService.error("Messaggio di errore!");
        //alert("Messaggio di errore");
        console.log(this.alertService.getMessage());
        
        this.searchForm.reset("");
      }
    } 
    else {
      this.specieServie.filtraSpecie();
    }
  }

}