import { NgModule } from '@angular/core';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { FooterComponent } from './footer/footer.component';
import { LegendaErbeComponent } from './legenda-erbe/legenda-erbe.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ProjectInfoComponent,
    FooterComponent,
    LegendaErbeComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
  ],
  exports:[    
    ProjectInfoComponent,
    FooterComponent,
    LegendaErbeComponent
  ]
})

export class CommonComponentModule { }
