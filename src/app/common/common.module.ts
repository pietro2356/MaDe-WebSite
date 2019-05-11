import { NgModule } from '@angular/core';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { FooterComponent } from './footer/footer.component';
import { LegendaErbeComponent } from './legenda-erbe/legenda-erbe.component';

@NgModule({
  declarations: [
    ProjectInfoComponent,
    FooterComponent,
    LegendaErbeComponent
  ],
  exports:[
    CommonModule
  ]
})

export class CommonModule { }
