import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent, DialogData } from './home/home.component';
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
import { CommonComponentModule } from './common/common-component.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogData
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
    AppRoutingModule,
    CommonComponentModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent],
  entryComponents: [DialogData]
})
export class AppModule { }
