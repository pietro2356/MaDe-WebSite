import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecieComponent } from './specie.component';
import { SpecieListComponent } from './specie-list/specie-list.component';
import { SpecieItemComponent } from './specie-list/specie-item/specie-item.component';
import { MaterialModule } from '../material.module';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageCardComponent } from './image-card/image-card.component';
import { DataCardComponent } from './data-card/data-card.component';
import { CommonComponentModule } from '../common/common-component.module';

@NgModule({
  declarations: [
    SpecieComponent,
    SpecieListComponent,
    SpecieItemComponent,
    ImageCardComponent,
    DataCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexModule,
    ReactiveFormsModule,
    CommonComponentModule
  ],
  exports: [
    SpecieComponent
  ]
})
export class SpecieModule { }
