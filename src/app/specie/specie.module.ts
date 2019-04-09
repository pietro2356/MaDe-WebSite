import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecieComponent } from './specie.component';
import { SpecieListComponent } from './specie-list/specie-list.component';
import { SpecieItemComponent } from './specie-list/specie-item/specie-item.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { MaterialModule } from '../material.module';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    SpecieComponent,
    SpecieListComponent,
    SpecieItemComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexModule,
    ReactiveFormsModule
  ],
  exports: [
    SpecieComponent
  ]
})
export class SpecieModule { }
