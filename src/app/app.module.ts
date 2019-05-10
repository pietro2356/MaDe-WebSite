import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectInfoComponent } from './common/project-info/project-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { SpecieModule } from './specie/specie.module';
import { AppRoutingModule } from './app-routing.module';
import { DbService } from './common/db.service';
import { FooterComponent } from './common/footer/footer.component';
import { LegendaErbeComponent } from './common/legenda-erbe/legenda-erbe.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectInfoComponent,
    LegendaErbeComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SpecieModule,
    AppRoutingModule
  ],
  exports: [ProjectInfoComponent, LegendaErbeComponent],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
