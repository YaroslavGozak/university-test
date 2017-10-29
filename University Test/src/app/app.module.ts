import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TestCardComponent } from './test-card/test-card.component';
import {MatCardModule,MatRadioModule,MatButtonModule} from '@angular/material';
import { AppComponent } from './app.component';
//import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { TestsService } from './services/tests.service';
import { ResultComponent } from './result/result.component';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material';
const appRoutes: Routes = [
  {
    path: 'test/:id',
    component: TestCardComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TestCardComponent,
    ResultComponent,
    LoginComponent
  ],
  imports: [ 
	     RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,	
	MatCardModule,
	MatRadioModule,
	MatButtonModule,
	MatInputModule
  ],
  providers: [TestsService, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
