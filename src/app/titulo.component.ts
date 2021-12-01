import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Persona } from "./persona";

@Component({
    selector: 'app-titulo',
    template: `
        <h6 (click)="hPulsado()">
            {{texto}}: {{objeto?.id}} {{objeto?.nombre}}
        </h6>`,
    styles: [ `h1 { font-family: sans-serif; }`]
})
export class TituloComponent {
    @Input() texto: string = '';
    @Input() objeto?: Persona;

    @Output() pulsado = new EventEmitter<Persona>();

    hPulsado(): void {
        console.log('Pulsado título');
        this.pulsado.emit(this.objeto);
    }
}
