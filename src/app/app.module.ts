import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabelInputComponent } from './label-input.component';
import { TituloComponent } from './titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    LabelInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
