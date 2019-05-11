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
    ProjectInfoComponent,
    FooterComponent,
    LegendaErbeComponent
  ],
  imports:[]
})

export class CommonModule { }
