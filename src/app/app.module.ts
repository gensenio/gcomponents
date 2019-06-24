import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GcomponentsModule} from 'gcomponents';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GcomponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
