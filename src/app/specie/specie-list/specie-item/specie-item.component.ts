import { Component, OnInit, Input, Inject } from '@angular/core';
import { Specie } from '../../model/specie.model';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-specie-item',
  templateUrl: './specie-item.component.html',
  styleUrls: ['./specie-item.component.css']
})
export class SpecieItemComponent implements OnInit {

  @Input() specie: Specie;
  @Input() corrente: boolean;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  Onclickme(specie: Specie) {
    this.dialog.open(DialogDataSpecie, {
      data: specie 
    })
  }

}

@Component({
  selector: 'dialog-data-specie',
  templateUrl: '../../alert/dialog-data-specie.html',
  styleUrls: ['../../alert/dialog-data-specie.css']
})
export class DialogDataSpecie {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogDataSpecie) {}
}