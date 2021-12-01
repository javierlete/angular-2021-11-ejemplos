import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-label-input',
    template: `
    <div class="row mb-3">
        <label for="{{id}}" class="col-sm-2 col-form-label">{{texto}}</label>
        <div class="col-sm-10">
        <input #cuadro (input)="this.valorChange.emit(cuadro.value)" type="{{tipo}}" class="form-control" id="{{id}}" value="{{valor}}">
        </div>
    </div>
    `
})
export class LabelInputComponent {
    @Input() id: string = '';
    @Input() texto: string = '';
    @Input() tipo: string = 'text';

    @Input() valor: any;
    @Output() valorChange = new EventEmitter();
}


