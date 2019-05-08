import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DbService } from '../common/db.service';
import { SpecieService } from '../specie/specie.service';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm: FormGroup
  constructor(private dbService: DbService,
              private specieServie: SpecieService,
              private router: Router) { }

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
    this.router.navigateByUrl("/specie");
    if (stringaRicerca) {
      this.specieServie.filtraSpecie(stringaRicerca);
    } 
    else {
      this.specieServie.filtraSpecie();
    }
  }

}