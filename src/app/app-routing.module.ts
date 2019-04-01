import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpecieComponent } from './specie/specie.component';
import { ProjectInfoComponent } from './project-info/project-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'specie', component: SpecieComponent },
  { path: 'info', component: ProjectInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
