import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './specie/list-card/card/card.component'
import { ListCardComponent } from './specie/list-card/list-card.component';
import { SpecieComponent } from './specie/specie.component';
import { CardImgComponent } from './specie/card-img/card-img.component';
import { CardDataComponent } from './specie/card-data/card-data.component';
import { MaterialModule } from './material.module';
import { DbService } from './common/db.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
<<<<<<< HEAD
import { from } from 'rxjs';

=======
>>>>>>> 42e21d588595f808684039475a9e1375b55020f2
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CardComponent,
    ListCardComponent,
    SpecieComponent,
    CardImgComponent,
    CardDataComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [    
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
