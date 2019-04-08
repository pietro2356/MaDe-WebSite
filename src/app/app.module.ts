import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
=======
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './specie/list-card/card/card.component';
import { ListCardComponent } from './specie/list-card/list-card.component';
import { SpecieComponent } from './specie/specie.component';
import { CardImgComponent } from './specie/card-img/card-img.component';
import { CardDataComponent } from './specie/card-data/card-data.component';
>>>>>>> 48de26e0456834afff9317ad41dd93a28a109c01
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { from } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { SpecieModule } from './specie/specie.module';
import { AppRoutingModule } from './app-routing.module';
import { DbService } from './common/db.service';
<<<<<<< HEAD
=======
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
>>>>>>> 48de26e0456834afff9317ad41dd93a28a109c01

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent,
    ProjectInfoComponent
=======
    FooterComponent,
    CardComponent,
    ListCardComponent,
    SpecieComponent,
    CardImgComponent,
    CardDataComponent,
    SearchBarComponent
>>>>>>> 48de26e0456834afff9317ad41dd93a28a109c01
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
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
