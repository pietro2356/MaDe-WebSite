import { NgModule } from '@angular/core';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { FooterComponent } from './footer/footer.component';
import { LegendaErbeComponent } from './legenda-erbe/legenda-erbe.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alertservice.service';

@NgModule({
  declarations: [
    ProjectInfoComponent,
    FooterComponent,
    LegendaErbeComponent,
    AlertComponent,
    AlertService
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule
  ]
})

export class CommonModule { }
