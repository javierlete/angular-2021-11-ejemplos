import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabelInputComponent } from './label-input.component';
import { TituloComponent } from './titulo.component';
import { MayusculatorPipe } from './mayusculator.pipe';
import { HighlightDirective } from './highlight.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    LabelInputComponent,
    MayusculatorPipe,
    HighlightDirective,
    FormularioReactivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
