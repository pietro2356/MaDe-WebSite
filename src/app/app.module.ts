import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule, MatIconModule, MatToolbarModule, MatFormFieldModule } from '@angular/material';
import { CardComponent } from './list-card/card/card.component'
import { ListCardComponent } from './list-card/list-card.component';
import { from } from 'rxjs';
import { ContainerComponent } from './container/container.component';
import { CardImgComponent } from './container/card-img/card-img.component';
import { CardDataComponent } from './container/card-data/card-data.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CardComponent,
    ListCardComponent,
    ContainerComponent,
    CardImgComponent,
    CardDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
