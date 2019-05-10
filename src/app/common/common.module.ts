import { NgModule } from '@angular/core';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    ProjectInfoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule
  ]
})

export class CommonModule { }
