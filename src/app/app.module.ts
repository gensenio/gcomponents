import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {GcomponentsModule} from 'gcomponents';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GcomponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
