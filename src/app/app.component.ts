import { Component } from '@angular/core';
import { Persona } from './persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  variablePadreSimple = 'Texto de variablePadreSimple';
  objetoPadre = {
    id: 1, nombre: 'Javier'
  }

  tituloPulsado(persona: Persona): void {
    alert('Título pulsado ' + persona.nombre);
  }
}