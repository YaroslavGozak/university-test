import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TestCardComponent } from './test-card/test-card.component';
//import {MatCardModule,MatRadioModule,MatButtonModule} from '@angular/material';
import { AppComponent } from './app.component';
//import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { TestsService } from './services/tests.service';
import { PopupModule } from 'ng2-opd-popup';
const appRoutes: Routes = [
    {
        path: 'test/:id',
        component: TestCardComponent,
    },
  {
      path: '**',
      redirectTo: ''
  }
];

@NgModule({
    declarations: [
        AppComponent,
        TestCardComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes
        ),
        BrowserModule,
        PopupModule.forRoot()
    ],
    providers: [TestsService, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
