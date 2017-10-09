import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TestCardComponent } from './test-card/test-card.component';
import {MatCardModule,MatRadioModule,MatButtonModule} from '@angular/material';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    TestCardComponent
  ],
  imports: [
    BrowserModule,
	MatCardModule,
	MatRadioModule,
	MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
